# Smart Wi-Fi Network Planner

## 1. Project Overview

The **Smart Wi-Fi Network Planner** is a simple web application designed to estimate the number of Wi-Fi access points (APs) needed for a university or library. The estimate is based on the total number of Wi-Fi users and the planned number of users supported by each access point.

This project is developed for **ITEC 300 – Computer Communications and Networking**.

**Important:** The application provides a basic capacity estimate only. It does not measure live Wi-Fi performance or guarantee wireless coverage. Actual access-point placement and coverage depend on factors such as building layout, walls, interference and signal strength, and should be assessed through a professional wireless site survey.

## 2. Project Objectives

- Provide a simple way to estimate the number of access points required.
- Demonstrate basic wireless networking and capacity-planning concepts.
- Apply HTML, CSS and JavaScript to create an interactive web application.
- Validate user inputs and display meaningful results or error messages.

## 3. Application Features

- Enter the total number of Wi-Fi users.
- Enter the planned number of users supported per access point.
- Calculate the estimated number of access points.
- Display the inputs, calculation and recommendation.
- Validate empty, negative, non-integer and invalid capacity inputs.
- Reset the input fields and results.
- Explain the networking concepts used by the planner.
- Display a simplified network diagram:
  **Internet → Router / Switch → Wi-Fi Access Points → Student Devices**
- Use a responsive layout that adjusts for smaller screens.

## 4. Technologies Used

- **HTML5** – provides the page structure, input fields, buttons and content.
- **CSS3** – styles the page, cards, buttons, network diagram and mobile layout.
- **JavaScript** – validates inputs, calculates the estimated AP count and handles the Calculate and Reset buttons.
- **Visual Studio Code** – recommended code editor.
- **Web browser** – runs the application.

The application is a front-end website. It does not require a database, Python or a backend server.

## 5. Project Files

Keep all four files in the same folder:

```text
Smart-WiFi-Network-Planner/
├── index.html
├── style.css
├── script.js
└── README.md
```

### File descriptions

| File | Purpose |
|---|---|
| `index.html` | Defines the application content, input fields, buttons and network diagram. |
| `style.css` | Controls the visual design, layout, colours, spacing and mobile responsiveness. |
| `script.js` | Checks the inputs, calculates the number of APs and resets the application. |
| `README.md` | Provides project information and instructions. |

The HTML file links to `style.css` in the page header and loads `script.js` before the closing body tag. Keep the filenames and folder structure unchanged unless you also update those references.

## 6. How the Calculation Works

The application uses the ceiling function to round the result up to the next whole access point.

**Formula:**

```text
Estimated APs = ceiling(Total Wi-Fi users / Planned users per AP)
```

**Example:**

- Total Wi-Fi users: 80
- Planned users per AP: 25
- Calculation: 80 / 25 = 3.2
- Estimated access points: 4

The result is rounded up because a fraction of an access point cannot be installed.

## 7. Input Validation

The application checks that:

- Both input fields contain values.
- The number of users is a whole number greater than or equal to zero.
- The planned capacity per access point is a whole number greater than zero.

If an input is empty or invalid, the application displays an error message rather than calculating a result.

## 8. How to Run the Application

1. Download or clone the project repository.
2. Make sure `index.html`, `style.css` and `script.js` are saved in the same folder.
3. Open the project folder in Visual Studio Code.
4. Open `index.html` in a web browser by double-clicking it in File Explorer.

**Optional – Run with Live Server:**

1. Open the Extensions panel in Visual Studio Code.
2. Search for and install the **Live Server** extension.
3. Right-click `index.html`.
4. Select **Open with Live Server**.

No additional packages or server configuration are required.

## 9. How to Use the Application

1. Open the Smart Wi-Fi Network Planner in a browser.
2. Enter the number of Wi-Fi users.
3. Enter the planned number of users per access point.
4. Click **Calculate APs**.
5. Review the estimated number of access points and the calculation.
6. Click **Reset** to clear the inputs and results.

## 10. Suggested Test Cases

Run each test in the application. Record the actual output and mark it Pass or Fail only after checking the result.

| Test | Number of users | Planned users per AP | Expected result |
|---|---:|---:|---|
| Normal case 1 | 80 | 25 | 4 APs |
| Normal case 2 | 100 | 25 | 4 APs |
| Normal case 3 | 50 | 10 | 5 APs |
| Boundary case | 0 | 25 | 0 APs |
| Invalid capacity | 80 | 0 | Validation error |
| Empty input | Blank | 25 | Validation error |
| Negative users | -5 | 25 | Validation error |

## 11. Networking Concepts

- **Wireless LAN (WLAN):** A local area network that connects devices wirelessly.
- **Wireless Access Point (AP):** A networking device that allows wireless devices to connect to a network.
- **Network capacity:** The planned number of users or devices an access point is expected to support.
- **Network congestion:** A condition in which high network demand can affect network performance.
- **Coverage:** The physical area in which a usable wireless signal is available.

## 12. Limitations

- The estimate depends on the user-entered capacity assumption.
- The application does not identify the real-world capacity of a particular access point.
- It does not measure signal strength, interference, walls, building materials or physical coverage.
- It does not perform a wireless site survey.
- The network diagram is a simplified educational representation, not a detailed deployment plan.

## 13. Possible Future Improvements

- Allow users to enter the number of floors or coverage zones.
- Display multiple access points in a more detailed network diagram.
- Let users compare different capacity assumptions.
- Add guidance about factors that affect AP placement.
- Include a checklist for planning a professional wireless site survey.

## 14. Team Contributions

Complete this table with your group's actual names and responsibilities before submission.

| Group member | Contribution |
|---|---|
| Member 1 | Add name and actual contribution |
| Member 2 | Add name and actual contribution |
| Member 3 | Add name and actual contribution |
| Member 4 | Add name and actual contribution |

## 15. Project Information

- **Course:** ITEC 300 – Computer Communications and Networking
- **Project title:** Smart Wi-Fi Network Planner
- **Application type:** Front-end web application
- **Languages:** HTML, CSS and JavaScript
