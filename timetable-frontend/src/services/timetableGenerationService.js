import api from "./api";

const BASE_URL = "/timetable-generation";

const timetableGenerationService = {

    /**
     * Generate Timetable
     */
    generateTimetable: async (request) => {

        const response = await api.post(

            `${BASE_URL}/generate`,

            request

        );

        return response.data;

    },

    /**
     * Preview Generated Timetable
     */
    previewTimetable: async (request) => {

        const response = await api.post(

            `${BASE_URL}/preview`,

            request

        );

        return response.data;

    },

    /**
     * Save Generated Timetable
     */
    saveTimetable: async (request) => {

        const response = await api.post(

            `${BASE_URL}/save`,

            request

        );

        return response.data;

    },

    /**
     * Get Generation Summary
     */
    getSummary: async (generationId) => {

        const response = await api.get(

            `${BASE_URL}/summary/${generationId}`

        );

        return response.data;

    },

    /**
     * Get Conflicts
     */
    getConflicts: async (generationId) => {

        const response = await api.get(

            `${BASE_URL}/conflicts/${generationId}`

        );

        return response.data;

    }

};

export default timetableGenerationService;