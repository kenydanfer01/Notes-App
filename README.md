<h2>Test Ensolvers - Keny Danfer Chumacero Jibaja</h2>
<div align="center">
<h3 align="center">NOTES APP</h3>
  <p align="center">
      
  </p>
</div>

### Backend Built With

- ![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white)
- ![Spring](https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white)
- ![Gradle](https://img.shields.io/badge/Gradle-02303A.svg?style=for-the-badge&logo=Gradle&logoColor=white)
- ![MySQL](https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white)

### Frontend Built With

- ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
- ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
- ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these steps.

### Prerequisites

- JDK 17 [https://jdk.java.net/java-se-ri/17](https://jdk.java.net/java-se-ri/17)
- Gradle [https://gradle.org/install/](https://gradle.org/install/)
- MySQL [https://dev.mysql.com/downloads/installer/](https://dev.mysql.com/downloads/installer/)
- Node 18.16.1 [https://nodejs.org/es/download](https://nodejs.org/es/download)

### Recommended Tools

- Visual Studio Code [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- IntelliJ Community [https://www.jetbrains.com/idea/download/](https://www.jetbrains.com/idea/download/)
- Postman [https://www.postman.com/downloads/](https://www.postman.com/downloads/)

### Installation and manual execution

1. Clone the repository

   ```sh
   git clone url-repo notes-app
   ```

2. Change directory
   ```sh
   cd notes-app
   ```
3. Update the database connection settings in backend
   ```yml
   # src/main/resources/application.properties
   spring.datasource.url=jdbc:mysql://localhost:3306/db_notes
   spring.datasource.username=root
   spring.datasource.password=<your-password>
   ```

4. open and run backend
   ```sh
   ~ cd backend
   ~ gradle build
   ~ gradle bootRun
   ```

4. open and run frontend
   ```sh
   ~ cd frontend
   ~ npm install
   ~ npm run dev
   ```

### Install and run with Docker

You need to have Docker installed.

 - ![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
- Docker Desktop [https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/)


1. Clone the repository

   ```sh
   ~ git clone url-repo notes-app
   ```

2. Change directory
   ```sh
   ~ cd notes-app
   ```

3. Execute
   ```sh
   ~ docker-compose up
   ```

<!-- USAGE -->

## Usage

1. Open [http://localhost:5173](http://localhost:5173) in your web browser

## Views:
Notes Actived
![Alt text](img/image.png)

Notes Archived
![Alt text](img/image-1.png)

Create Note
![Alt text](img/image-2.png)

Edit Note
![Alt text](img/image-3.png)

Note Archived!
![Alt text](img/image-4.png)

Note Removed!
![Alt text](img/image-5.png)

