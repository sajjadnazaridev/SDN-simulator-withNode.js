# SDN-simulator-withNode.js

Implementing an SDN simulator using Node.js that receives an IP address and, after verifying the address, displays a simulated ICMP Request and ICMP Reply to the user.

## Introduction

This project implements an SDN simulator using Node.js. The simulator receives an IP address and, after verifying the address, displays a simulated ICMP Request and ICMP Reply to the user.

### Limitations

Before implementing this simulator, a test version of the SDN was built to process packets. Unfortunately, Windows processes ICMP requests internally first, preventing the packets from reaching the Node.js application. This behavior is due to the internal network logic that identifies and replies to the requests.

Initially, a virtual interface was created using the Microsoft KM-TEST Loopback Adapter and an IP address was assigned. However, when the program was executed and a ping was performed, Windows processed the requests before the raw_socket library had the opportunity to handle them.

- **ICMP Request:**  
  This is a request sent to the specified interface or server. In simple terms, it asks, "Are you there?" (e.g., `ping google.com`).

- **ICMP Reply:**  
  This is the response to the ICMP Request, which includes details such as the response time and the IP address of the sender.

## Dependencies

### Libraries Used

- **Inquirer:**  
  Inquirer requires less code than readline and allows you to implement various conditions with minimal code. In this project, it is used to validate the IP address received from the user and to provide the opportunity to edit it if necessary. This is more efficient compared to readline, which would involve more code and require more time.  
  [Source for Inquirer](https://www.npmjs.com/package/inquirer)

## Development Tools (devDependencies)

- **Mocha | Chai:**  
  These tools are used for testing the application's functionality.

## Project Structure

- **Utilities:**  
  Contains utility functions that are used throughout the application (such as IP address validation).

- **Services:**  
  Contains the main code and core logic of the application.

- **Test:**  
  Contains the test code for the application, which can be run to validate the program.

## How to Use the Application

1. **Clone the project:**
   ```bash
   git clone https://github.com/sajjadnazaridev/SDN-simulator-withNode.js.git
   ```

2. **Navigate to the project folder:**
   ```bash
   cd SDN-simulator-withNode.js
   ```

3. **Install the project packages:**
   ```bash
   npm install
   ```

4. **Run the project:**
   ```bash
   npm start
   ```

   **Expected Output:**  
   When the application runs successfully, you will see output indicating that an IP address has been assigned and that simulated ICMP Request/Reply messages are being processed.

## Testing the Application

To run the tests for the project:

1. **Run the tests:**
   ```bash
   npm test
   ```

   **Expected Output:**  
   The test results should display in the console, confirming that the application behaves as expected.