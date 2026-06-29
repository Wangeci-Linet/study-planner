# System Design

This document describes the technical architecture of the StudyTrack application. It outlines how the application is structured, how data flows between components, how state is managed, and the architectural decisions made for the MVP.

The goal is to establish a maintainable, scalable, and modular frontend architecture before implementation begins.

---

# 1. Design Goals

The system is designed to:

- Be easy to understand and maintain.
- Use reusable React components.
- Separate presentation from application logic.
- Organize code into logical modules.
- Support future feature expansion without significant restructuring.

---

# 2. High-Level Architecture

StudyTrack is a frontend-only application.

Application data is stored locally in the user's browser using Local Storage. React is responsible for rendering the user interface and managing application state.

```
┌─────────────────────────┐
│        Browser          │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│      React App          │
├─────────────────────────┤
│ Pages                   │
│ Components              │
│ Hooks                   │
│ Context                 │
│ Services                │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│     Local Storage       │
└─────────────────────────┘
```

---

# 3. Application Architecture

The application follows a component-based architecture.

Each feature is divided into reusable React components that are responsible for a single purpose.

The architecture separates:

- Pages
- Reusable UI components
- Business logic
- State management
- Utility functions

This separation improves readability, maintainability, and code reuse.

---

# 4. Folder Structure

```text
src/
│
├── assets/
├── components/
├── context/
├── hooks/
├── layouts/
├── pages/
├── routes/
├── services/
├── utils/
├── App.jsx
├── main.jsx
└── index.css
```

## Folder Responsibilities

| Folder | Responsibility |
|---------|----------------|
| assets | Images, icons and static files |
| components | Reusable UI components |
| pages | Route-level pages |
| layouts | Shared page layouts |
| hooks | Custom React hooks |
| context | Global state management |
| routes | Application routing |
| services | Local Storage and future API logic |
| utils | Helper functions |

---

# 5. Component Hierarchy

```
App
│
├── Layout
│
├── Navbar
│
├── Dashboard
│   ├── SummaryCard
│   ├── ProgressChart
│   └── UpcomingSessions
│
├── Courses
│   ├── CourseList
│   ├── CourseCard
│   └── CourseForm
│
└── StudySessions
    ├── SessionList
    ├── SessionCard
    └── SessionForm
```

Each component has a single responsibility and should remain as independent as possible.

---

# 6. Routing Strategy

The application uses React Router for client-side routing.

Planned routes include:

| Route | Purpose |
|--------|----------|
| / | Dashboard |
| /courses | View all courses |
| /courses/:id | Course details |
| /sessions | Study sessions |
| * | Not Found |

---

# 7. State Management

The MVP uses React Context and Hooks for global state management.

Global state includes:

- Courses
- Study Sessions

Component state includes:

- Form inputs
- Modal visibility
- Validation errors
- Search queries

This approach is sufficient for the project's size and avoids introducing additional state management libraries.

---

# 8. Data Model

## Course

```text
Course
-------
id
title
platform
totalModules
completedModules
createdAt
updatedAt
```

---

## Study Session

```text
StudySession
------------
id
courseId
title
date
duration
status
```

---

# 9. Data Flow

The application follows a unidirectional data flow.

```
User Action
      │
      ▼
React Component
      │
      ▼
State Update
      │
      ▼
UI Re-render
      │
      ▼
Local Storage
```

This predictable flow makes the application easier to debug and maintain.

---

# 10. Persistence Strategy

Application data is stored in Local Storage.

Whenever course or study session data changes:

1. React state is updated.
2. The updated state is saved to Local Storage.
3. When the application starts, data is loaded from Local Storage into React state.

This provides persistence without requiring a backend.

---

# 11. Design Decisions

| Decision | Reason |
|----------|--------|
| React | Component-based architecture and strong ecosystem |
| JavaScript | Current level of expertise and project timeline |
| Vite | Fast development server and build tool |
| React Router | Client-side navigation |
| Context API | Sufficient for MVP state management |
| Local Storage | Simple persistence without a backend |

---

# 12. Scalability Considerations

Although this project is an MVP, the architecture allows future improvements such as:

- User authentication
- Backend integration
- Cloud data synchronization
- Dark mode
- Search and filtering
- Notifications
- Progressive Web App (PWA) support

These features can be added without major architectural changes.

---

# 13. Next Steps

The next phase is **UI/UX Design**, where the application's layout, wireframes, design system, and high-fidelity interface will be finalized before implementation.

**Previous:** [Requirements Engineering](./02-requirements-engineering.md)

**Next:** [UI/UX Design](./04-ui-ux-design.md)