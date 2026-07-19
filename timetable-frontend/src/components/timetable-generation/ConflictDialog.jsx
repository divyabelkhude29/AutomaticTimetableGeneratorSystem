import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Chip
} from "@mui/material";

const ConflictDialog = ({
    open,
    onClose,
    conflicts = []
}) => {

    return (

        <Dialog
            open={open}
            onClose={onClose}
            fullWidth
            maxWidth="lg"
        >

            <DialogTitle>

                Timetable Conflicts

            </DialogTitle>

            <DialogContent>

                {

                    conflicts.length === 0 ?

                    (

                        <Typography
                            color="success.main"
                            sx={{ mt: 2 }}
                        >

                            No conflicts found. Timetable generated successfully.

                        </Typography>

                    )

                    :

                    (

                        <TableContainer
                            component={Paper}
                            sx={{ mt: 2 }}
                        >

                            <Table>

                                <TableHead>

                                    <TableRow>

                                        <TableCell>
                                            <strong>Type</strong>
                                        </TableCell>

                                        <TableCell>
                                            <strong>Day</strong>
                                        </TableCell>

                                        <TableCell>
                                            <strong>Time Slot</strong>
                                        </TableCell>

                                        <TableCell>
                                            <strong>Description</strong>
                                        </TableCell>

                                        <TableCell align="center">
                                            <strong>Status</strong>
                                        </TableCell>

                                    </TableRow>

                                </TableHead>

                                <TableBody>

                                    {

                                        conflicts.map((conflict, index) => (

                                            <TableRow key={index}>

                                                <TableCell>

                                                    {conflict.type}

                                                </TableCell>

                                                <TableCell>

                                                    {conflict.day}

                                                </TableCell>

                                                <TableCell>

                                                    {conflict.timeSlot}

                                                </TableCell>

                                                <TableCell>

                                                    {conflict.description}

                                                </TableCell>

                                                <TableCell align="center">

                                                    <Chip

                                                        label={
                                                            conflict.status ||
                                                            "Conflict"
                                                        }

                                                        color={
                                                            conflict.status ===
                                                            "Resolved"

                                                                ?

                                                                "success"

                                                                :

                                                                "error"
                                                        }

                                                        size="small"

                                                    />

                                                </TableCell>

                                            </TableRow>

                                        ))

                                    }

                                </TableBody>

                            </Table>

                        </TableContainer>

                    )

                }

            </DialogContent>

            <DialogActions>

                <Button
                    variant="contained"
                    onClick={onClose}
                >

                    Close

                </Button>

            </DialogActions>

        </Dialog>

    );

};

export default ConflictDialog;