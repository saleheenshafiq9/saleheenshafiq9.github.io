---
title: "Save The Date : A Party Planning Application"
excerpt: "Save The Date is a web-based party planning application designed to connect service providers with customers looking to organize events. The application recommends venues, catering, decorations, and other services based on user choice, making it easier for them to plan and manage events. <br/><br/><img src='/images/std-1.png' width=400px>"
collection: portfolio
---

Planning events such as weddings or birthdays can be overwhelming, especially with the need to coordinate multiple services and manage budgets. Save The Date was developed to reduce this burden by providing an integrated platform where users can easily book services and manage their event details.

**Centralized Service Platform:** 
Bring together various party-related service providers (venues, catering, decorators, etc.) in one place.
**Automated Event Planning:** 
Generate full event plans based on user preferences.
**Recommendation System:** 
Provide service recommendations based on user inputs like budget, location, and guest count.
**Event Management:** 
Help users keep track of event planning and customizations.

<iframe src="https://saleheenshafiq9.github.io/files/std.mp4" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>

**Architecture**

Save The Date is built on a three-tier architecture:

Presentation Tier - Utilizes ReactJS for the frontend, offering a dynamic and responsive user interface.
Application Tier - Built with Django, a high-level Python web framework, handling the business logic and REST API integration.
Data Tier - MySQL is used as the database management system for storing structured data.

**Features**

User Authentication - Secure login and signup system with token-based authentication.
Profile Management - Different views for customers and service providers, each with unique functionalities.
Party Booking System - Users can browse and book services, with a cart feature to manage selected services.
Appointment Scheduling - Customers can request and schedule appointments with service providers.
Recommendation System - Implements the K-Nearest Neighbor algorithm to suggest services based on user preferences.
Responsive UI - Designed using ReactJS and styled with Bootstrap for an intuitive user experience.

![Venue Exploration](https://saleheenshafiq9.github.io/images/std-2.png)  
*Figure 1: Venue Exploration.*

**Implementation**
*Front-End*
Styling: Integrated Bootstrap 5 and various React libraries for enhanced UI/UX.
Components: Modular components for handling services, profiles, booking, and more.
Profile Switching: Dynamic routing based on user type (customer, service provider).

*Back-End*
Django Framework: Handles user data, service bookings, and recommendation logic.
REST API: Facilitates communication between the frontend and backend, ensuring secure data transactions.
Recommendation System: Calculates and recommends services using past data and user inputs.

![Recommendation Interface](https://saleheenshafiq9.github.io/images/std-3.png)  
*Figure 2: Recommendation Interface.*

**Future Work**
The project has the potential for further development, including:

Live Progress Tracking: Real-time updates from vendors to customers.
Chatbot Integration: To facilitate communication between customers and service providers.
Mobile App Development: Expanding the platform to mobile using React Native.
Guest List Management: Tracking guests and managing RSVPs.
Business Model Development: Establishing a sustainable business model to attract funding and expand the service.

Save The Date aims to simplify the process of event planning by integrating multiple services into one platform. This project has not only provided valuable insights into web development but also laid the foundation for a potential commercial product that could ease the burden of organizing events.


[Download the report here](https://saleheenshafiq9.github.io/files/std-rep.pdf)  

[See the project on GitHub](https://github.com/saleheenshafiq9/SaveTheDate)