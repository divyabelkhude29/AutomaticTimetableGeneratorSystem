import {
    Card,
    CardContent,
    Grid,
    Typography,
    Chip,
    Divider
} from "@mui/material";

const GenerationSummary = ({ summary }) => {

    if (!summary) {

        return null;

    }

    return (

        <Card sx={{ mt: 3 }}>

            <CardContent>

                <Typography
                    variant="h6"
                    fontWeight="bold"
                    gutterBottom
                >
                    Generation Summary
                </Typography>

                <Divider sx={{ mb: 3 }} />

                <Grid container spacing={3}>

                    <Grid item xs={12} sm={6} md={4}>

                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >
                            Total Subjects
                        </Typography>

                        <Typography
                            variant="h5"
                            fontWeight="bold"
                        >
                            {summary.totalSubjects ?? 0}
                        </Typography>

                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>

                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >
                            Total Faculty
                        </Typography>

                        <Typography
                            variant="h5"
                            fontWeight="bold"
                        >
                            {summary.totalFaculty ?? 0}
                        </Typography>

                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>

                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >
                            Total Classrooms
                        </Typography>

                        <Typography
                            variant="h5"
                            fontWeight="bold"
                        >
                            {summary.totalClassrooms ?? 0}
                        </Typography>

                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>

                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >
                            Time Slots Used
                        </Typography>

                        <Typography
                            variant="h5"
                            fontWeight="bold"
                        >
                            {summary.totalTimeSlots ?? 0}
                        </Typography>

                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>

                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >
                            Conflicts
                        </Typography>

                        <Typography
                            variant="h5"
                            fontWeight="bold"
                            color={
                                summary.totalConflicts > 0
                                    ? "error.main"
                                    : "success.main"
                            }
                        >
                            {summary.totalConflicts ?? 0}
                        </Typography>

                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>

                        <Typography
                            variant="body2"
                            color="text.secondary"
                            gutterBottom
                        >
                            Status
                        </Typography>

                        <Chip
                            label={
                                summary.status || "Generated"
                            }
                            color={
                                summary.status === "FAILED"
                                    ? "error"
                                    : "success"
                            }
                        />

                    </Grid>

                </Grid>

            </CardContent>

        </Card>

    );

};

export default GenerationSummary;