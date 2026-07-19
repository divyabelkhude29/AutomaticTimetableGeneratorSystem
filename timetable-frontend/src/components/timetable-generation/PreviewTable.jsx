import {
    Paper,
    Typography,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody
} from "@mui/material";

const DAYS = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

const PreviewTable = ({ timetable }) => {

    if (!timetable || timetable.length === 0) {

        return (
            <Paper sx={{ mt: 3, p: 3 }}>

                <Typography
                    align="center"
                    color="text.secondary"
                >
                    No timetable generated.
                </Typography>

            </Paper>
        );

    }

    // Get all unique time slots
    const timeSlots = [
        ...new Set(
            timetable.map(item => item.timeSlot)
        )
    ];

    return (

        <Paper sx={{ mt: 3, overflowX: "auto" }}>

            <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ p: 2 }}
            >
                Timetable Preview
            </Typography>

            <Table>

                <TableHead>

                    <TableRow>

                        <TableCell>
                            <strong>Time</strong>
                        </TableCell>

                        {
                            DAYS.map(day => (

                                <TableCell
                                    key={day}
                                    align="center"
                                >

                                    <strong>{day}</strong>

                                </TableCell>

                            ))
                        }

                    </TableRow>

                </TableHead>

                <TableBody>

                    {

                        timeSlots.map(slot => (

                            <TableRow key={slot}>

                                <TableCell>

                                    <strong>{slot}</strong>

                                </TableCell>

                                {

                                    DAYS.map(day => {

                                        const lecture = timetable.find(

                                            item =>

                                                item.day === day &&

                                                item.timeSlot === slot

                                        );

                                        return (

                                            <TableCell
                                                key={day}
                                                align="center"
                                            >

                                                {

                                                    lecture ?

                                                    <>

                                                        <Typography
                                                            fontWeight="bold"
                                                            variant="body2"
                                                        >

                                                            {lecture.subjectName}

                                                        </Typography>

                                                        <Typography
                                                            variant="caption"
                                                            display="block"
                                                        >

                                                            {lecture.facultyName}

                                                        </Typography>

                                                        <Typography
                                                            variant="caption"
                                                            display="block"
                                                            color="text.secondary"
                                                        >

                                                            {lecture.classroomName}

                                                        </Typography>

                                                    </>

                                                    :

                                                    "-"

                                                }

                                            </TableCell>

                                        );

                                    })

                                }

                            </TableRow>

                        ))

                    }

                </TableBody>

            </Table>

        </Paper>

    );

};

export default PreviewTable;