import { useEffect, useState } from "react";

import {
    Grid,
    TextField,
    MenuItem,
    Button,
    Paper,
    Typography
} from "@mui/material";

import departmentService from "../../services/departmentService";
import courseService from "../../services/courseService";
import semesterService from "../../services/semesterService";
import sectionService from "../../services/sectionService";

const GenerateForm = ({ onGenerate }) => {

    const [formData, setFormData] = useState({

        departmentId: "",

        courseId: "",

        semesterId: "",

        sectionId: "",

        academicYear: ""

    });

    const [departments, setDepartments] = useState([]);

    const [courses, setCourses] = useState([]);

    const [semesters, setSemesters] = useState([]);

    const [sections, setSections] = useState([]);

    useEffect(() => {

        loadInitialData();

    }, []);

    const loadInitialData = async () => {

        try {

            const departmentResponse =
                await departmentService.getAllDepartments();

            const courseResponse =
                await courseService.getAllCourses();

            const semesterResponse =
                await semesterService.getAllSemesters();

            const sectionResponse =
                await sectionService.getAllSections();

            setDepartments(departmentResponse.data || departmentResponse);

            setCourses(courseResponse.data || courseResponse);

            setSemesters(semesterResponse.data || semesterResponse);

            setSections(sectionResponse.data || sectionResponse);

        } catch (error) {

            console.error(error);

        }

    };

    const handleChange = (event) => {

        setFormData({

            ...formData,

            [event.target.name]: event.target.value

        });

    };

    const handleSubmit = (event) => {

        event.preventDefault();

        onGenerate(formData);

    };

    return (

        <Paper sx={{ p: 3 }}>

            <Typography
                variant="h6"
                mb={3}
                fontWeight="bold"
            >

                Generate Timetable

            </Typography>

            <form onSubmit={handleSubmit}>

                <Grid container spacing={2}>

                    <Grid item xs={12} md={6}>

                        <TextField
                            select
                            fullWidth
                            label="Department"
                            name="departmentId"
                            value={formData.departmentId}
                            onChange={handleChange}
                        >

                            {
                                departments.map((department) => (

                                    <MenuItem
                                        key={department.departmentId}
                                        value={department.departmentId}
                                    >

                                        {department.departmentName}

                                    </MenuItem>

                                ))
                            }

                        </TextField>

                    </Grid>

                    <Grid item xs={12} md={6}>

                        <TextField
                            select
                            fullWidth
                            label="Course"
                            name="courseId"
                            value={formData.courseId}
                            onChange={handleChange}
                        >

                            {
                                courses.map((course) => (

                                    <MenuItem
                                        key={course.courseId}
                                        value={course.courseId}
                                    >

                                        {course.courseName}

                                    </MenuItem>

                                ))
                            }

                        </TextField>

                    </Grid>

                    <Grid item xs={12} md={6}>

                        <TextField
                            select
                            fullWidth
                            label="Semester"
                            name="semesterId"
                            value={formData.semesterId}
                            onChange={handleChange}
                        >

                            {
                                semesters.map((semester) => (

                                    <MenuItem
                                        key={semester.semesterId}
                                        value={semester.semesterId}
                                    >

                                        Semester {semester.semesterNumber}

                                    </MenuItem>

                                ))
                            }

                        </TextField>

                    </Grid>

                    <Grid item xs={12} md={6}>

                        <TextField
                            select
                            fullWidth
                            label="Section"
                            name="sectionId"
                            value={formData.sectionId}
                            onChange={handleChange}
                        >

                            {
                                sections.map((section) => (

                                    <MenuItem
                                        key={section.sectionId}
                                        value={section.sectionId}
                                    >

                                        {section.sectionName}

                                    </MenuItem>

                                ))
                            }

                        </TextField>

                    </Grid>

                    <Grid item xs={12}>

                        <TextField
                            fullWidth
                            label="Academic Year"
                            name="academicYear"
                            value={formData.academicYear}
                            onChange={handleChange}
                            placeholder="2026-2027"
                        />

                    </Grid>

                    <Grid item xs={12}>

                        <Button
                            fullWidth
                            type="submit"
                            variant="contained"
                            size="large"
                        >

                            Generate Timetable

                        </Button>

                    </Grid>

                </Grid>

            </form>

        </Paper>

    );

};

export default GenerateForm;