
# COVID Management System

## Description

This is a COVID Management System built with Node.js, Express, and MongoDB. It includes functionality for registering doctors and patients, managing COVID-related medical reports, and authentication using JWT. The project is designed with a clean architecture, separating routes, controllers, models, and repositories for better maintainability.

## Features

- **Doctor Registration & Login**: Register new doctors, authenticate using JWT.
- **Patient Registration**: Register patients and manage their information.
- **Report Management**: Create and retrieve COVID-related medical reports with different statuses.
- **JWT Authentication**: Secure endpoints with JWT-based authentication.

## Project Structure

- **`src/features/doctor`**: Contains doctor-related functionalities.
  - `doctorSchema.js`: Mongoose schema for doctors.
  - `doctorRepository.js`: Repository for handling doctor data.
  - `doctorController.js`: Controller for managing doctor operations.
  - `doctorRoutes.js`: Routes for doctor-related endpoints.
  
- **`src/features/patient`**: Contains patient-related functionalities.
  - `patientSchema.js`: Mongoose schema for patients.
  - `patientRepository.js`: Repository for handling patient data.
  - `patientController.js`: Controller for managing patient operations.
  - `patientRoutes.js`: Routes for patient-related endpoints.
  
- **`src/features/report`**: Contains report-related functionalities.
  - `reportSchema.js`: Mongoose schema for reports.
  - `reportRepository.js`: Repository for handling report data.
  - `reportController.js`: Controller for managing report operations.
  - `reportRoutes.js`: Routes for report-related endpoints.
  
- **`middleware`**: Contains middleware for authentication.
  - `jwtAuth.js`: Middleware for JWT authentication.
  
- **`config`**: Configuration files.
  - `db.js`: Database connection configuration.
  
- **`index.js`**: Main entry point for the server.

## Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/ATUL-SUNIL/COVID-MANAGEMENT-SYSTEM.git
   cd COVID-MANAGEMENT-SYSTEM
   ```

2. **Install dependencies**

   
   npm install
 

3. **Setup environment variables**

   Create a `.env` file in the root directory and add the following:

 
   PORT=3000
   JWT_SECRET=your_jwt_secret
   MONGO_URI=your_mongo_db_uri


4. **Start the server**


   node server.js


## API Endpoints

### Doctor

- **POST /api/doctors/register**: Register a new doctor.
- **POST /api/doctors/login**: Login and receive a JWT token.

### Patient

- **POST /api/patients/register**: Register a new patient.
- **POST /api/patients/:id/reports**: Create a COVID medical report for a patient.
- **GET /api/patients/:id/reports**: Retrieve COVID reports for a patient.

### Report

- **POST /api/reports/status**: Get COVID reports by status.

## Testing

You can test the API endpoints using Postman or any other API testing tool. Make sure to include the JWT token in the `Authorization` header for protected endpoints.

