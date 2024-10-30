🗺️ **Persistent Map with Yandex API and PostgreSQL** 

This project is a web application that allows users to upload geographical coordinates from a `.csv` or `.xlsx` file, display them on a Yandex map, and persist the data in a PostgreSQL database for consistent visualization. Every user visiting the site sees the same updated markers, thanks to the back-end database storage.

### Key Features
- **File Upload**: Users can upload a `.csv` or `.xlsx` file with coordinates to add markers on the map.
- **Persistent Storage**: The coordinates are saved in PostgreSQL, ensuring data consistency for all visitors.
- **Yandex Map Integration**: The map interface leverages the Yandex Maps API, enabling smooth, interactive navigation and custom markers.
- **Customizable Markers**: Easily add and customize marker icons based on conditions, such as the first record or randomized special markers.
  
### Stack
- **Front-End**: HTML, CSS, and JavaScript for a straightforward, user-friendly interface.
- **Back-End**: Node.js and Express for handling API requests and persisting data.
- **Database**: PostgreSQL for managing uploaded coordinates and providing persistent storage.
