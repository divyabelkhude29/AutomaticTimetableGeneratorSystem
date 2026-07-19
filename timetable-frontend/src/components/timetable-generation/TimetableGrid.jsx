import {
    Paper,
    Typography,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Chip
} from "@mui/material";

const DAYS = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

const TimetableGrid = ({ timetable = [] }) => {

    if (timetable.length === 0) {

        return (

            <Paper sx={{ p: 3, mt: 3 }}>

                <Typography
                    align="center"
                    color="text.secondary"
                >
                    No timetable available.
                </Typography>

            </Paper>

        );

    }

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
                Weekly Timetable
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
                                                sx={{
                                                    minWidth: 170,
                                                    verticalAlign: "top"
                                                }}
                                            >

                                                {

                                                    lecture ?

                                                    <>

                                                        <Chip
                                                            label={lecture.subjectCode}
                                                            color="primary"
                                                            size="small"
                                                            sx={{ mb: 1 }}
                                                        />

                                                        <Typography
                                                            variant="body2"
                                                            fontWeight="bold"
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
                                                        >
                                                            {lecture.sectionName}
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

export default TimetableGrid;