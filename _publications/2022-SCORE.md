---
title: "PharmaSync: Optimizing Security and Transparency in Pharmaceutical Supply Chains using Decentralized Hybrid Blockchain"
collection: publications
permalink: /publication/2023-SCORE
excerpt: >
  The “Fix Localisation System” (FLoS) is a web application that automates the testing process for detecting localization in a mobile application and provides fixes for the issues. It handles localization for both text and media content (audio, video & image). It has three modules which are registration & login for creating an account, project handling module for creating projects & controlling access to it and finally test & fix localization module.
date: 2023-01-06
venue: 'ICSE SCORE 2023'
# slidesurl: '/files/bc-deck.pdf'
paperurl: '/files/flos.pdf'
# citation: 'L. Kastner et. al. (2022) "Arena-Bench: A Benchmarking Suite for Obstacle Avoidance Approaches in Highly Dynamic Environments" Robotics and Automation Letters.'
---
The Fix Localization System (FLoS) is a comprehensive web application designed to identify and address localization issues in Android applications, supporting universal accessibility. FLoS comprises three main modules: Registration & Login, Project Handling, and Test & Fix Localization. Users can create accounts, manage projects, and initiate localization tests by uploading APK files. The system detects language and media content issues, generates translation files, and provides fixes for text, audio, and graphical user interface (GUI) elements.

The technical workflow begins with extracting content from APK files, generating an Abstract Syntax Tree (AST), and employing libraries like Tesseract OCR for text extraction and language detection. Identified issues are logged, and users can edit generated translations for accuracy. GUI fixes are managed by constructing a Visual Hierarchy Graph and applying clustering algorithms (e.g., DB-SCAN) to ensure consistency while resizing elements. The corrected APK is then presented with a detailed Localization Fix Report.

FLoS is built using React JS for the frontend, Django for the backend, and PostgreSQL for data storage, following a 3-tier architecture. It employs the MVC pattern for user interactions and a pipe-filter pattern for backend processing, ensuring modular and efficient handling of localization tasks. This system facilitates the development of inclusive software by respecting human values of accessibility and equality, thus broadening app usability across diverse languages and cultural contexts.

The FLoS system has potential future expansions, including classification of localization issues by severity, handling regional dialects, and support for right-to-left (RTL) languages such as Arabic and Hebrew.

![Fix Localisation Issues(GUI)](https://saleheenshafiq9.github.io/images/flos-1.png)  
*Figure 1: Fix Localisation Issues(GUI).*

![UI](https://saleheenshafiq9.github.io/images/flos-2.png)  
*Figure 2: User Interface of Issue Detection.*

[Download the report here](https://saleheenshafiq9.github.io/files/flos.pdf)  
