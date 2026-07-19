import { useState } from "react";

import {
    Box,
    Typography,
    Button,
    CircularProgress,
    Snackbar,
    Alert
} from "@mui/material";

import DashboardLayout from "../../components/layout/DashboardLayout";

import GenerateForm from "../../components/timetable-generation/GenerateForm";
import GenerationSummary from "../../components/timetable-generation/GenerationSummary";
import PreviewTable from "../../components/timetable-generation/PreviewTable";
import ConflictDialog from "../../components/timetable-generation/ConflictDialog";
import TimetableGrid from "../../components/timetable-generation/TimetableGrid";

import timetableGenerationService from "../../services/timetableGenerationService";

const GenerateTimetable = () => {

    const [loading, setLoading] = useState(false);

    const [summary, setSummary] = useState(null);

    const [timetable, setTimetable] = useState([]);

    const [conflicts, setConflicts] = useState([]);

    const [openConflict, setOpenConflict] = useState(false);

    const [snackbar, setSnackbar] = useState({

        open: false,

        message: "",

        severity: "success"

    });

    const showSnackbar = (message, severity = "success") => {

        setSnackbar({

            open: true,

            message,

            severity

        });

    };

    const closeSnackbar = () => {

        setSnackbar({

            ...snackbar,

            open: false

        });

    };

    const handleGenerate = async (request) => {

        try {

            setLoading(true);

            const response =
                await timetableGenerationService.generateTimetable(
                    request
                );

            /*
                Expected Response

                {

                    summary:{},

                    timetable:[],

                    conflicts:[]

                }

            */

            setSummary(response.summary);

            setTimetable(response.timetable || []);

            setConflicts(response.conflicts || []);

            if (
                response.conflicts &&
                response.conflicts.length > 0
            ) {

                setOpenConflict(true);

            }

            showSnackbar(

                "Timetable generated successfully."

            );

        }

        catch (error) {

            console.error(error);

            showSnackbar(

                "Failed to generate timetable.",

                "error"

            );

        }

        finally {

            setLoading(false);

        }

    };

    const handleSave = async () => {

        try {

            setLoading(true);

            await timetableGenerationService.saveTimetable({

                timetable

            });

            showSnackbar(

                "Timetable saved successfully."

            );

        }

        catch (error) {

            console.error(error);

            showSnackbar(

                "Unable to save timetable.",

                "error"

            );

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <DashboardLayout>

            <Box p={3}>

                <Typography

                    variant="h4"

                    fontWeight="bold"

                    mb={3}

                >

                    Timetable Generation

                </Typography>

                <GenerateForm

                    onGenerate={handleGenerate}

                />

                {

                    loading &&

                    (

                        <Box

                            mt={4}

                            display="flex"

                            justifyContent="center"

                        >

                            <CircularProgress />

                        </Box>

                    )

                }

                {

                    summary &&

                    (

                        <GenerationSummary

                            summary={summary}

                        />

                    )

                }

                {

                    timetable.length > 0 &&

                    (

                        <>

                            <PreviewTable

                                timetable={timetable}

                            />

                            <TimetableGrid

                                timetable={timetable}

                            />

                            <Box

                                mt={3}

                                display="flex"

                                justifyContent="flex-end"

                            >

                                <Button

                                    variant="contained"

                                    size="large"

                                    onClick={handleSave}

                                >

                                    Save Timetable

                                </Button>

                            </Box>

                        </>

                    )

                }

                <ConflictDialog

                    open={openConflict}

                    onClose={() => setOpenConflict(false)}

                    conflicts={conflicts}

                />

                <Snackbar

                    open={snackbar.open}

                    autoHideDuration={3000}

                    onClose={closeSnackbar}

                >

                    <Alert

                        severity={snackbar.severity}

                        onClose={closeSnackbar}

                        variant="filled"

                    >

                        {snackbar.message}

                    </Alert>

                </Snackbar>

            </Box>

        </DashboardLayout>

    );

};

export default GenerateTimetable;