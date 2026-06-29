<!-- @format -->

# Requirements Engineering

This document defines the functional and non-functional requirements for the StudyTrack application. It also describes the intended users, key user interactions, acceptance criteria and information architecture for Version 1.0 (MVP).

The purpose of this document is to establish a clear understanding of what the application should do before moving into the design and implementation phases.

---

# 1. Functional Requirements

Functional requirements describe the features and behaviors the application must provide.

## FR-001 Course Management

The system shall allow users to:

- Add a new course
- View all courses
- Edit an existing course
- Delete a course

---

## FR-002 Progress Tracking

The system shall allow users to:

- Record completed modules or lessons.
- Automatically calculate course completion percentage.
- Display progress visually using a progress bar.

---

## FR-003 Study Sessions

The system shall allow users to:

- Schedule study sessions.
- View upcoming study sessions.
- Delete completed or unnecessary sessions.

---

## FR-004 Dashboard

The dashboard shall display:

- Total number of courses.
- Overall learning progress.
- Upcoming study sessions.
- Learning Summary.

---

## FR-005 Data Persistence

The system shall:

- Save user data using Local Storage.
- Restore saved data when the application is reopened.

---

# 2. Non-Functional Requirements

## Performance

- The application should render the initial interface within 2 seconds on a standard broadband connection.
- User interactions should feel responsive.
- Dashboard statistics shall be recalculated and displayed whenever course or study session data changes.

---

## Usability

The application should:

- Be easy to navigate.
- Require minimal learning.
- Maintain a clean and consistent interface.

---

## Accessibility

The application should:

- Use sufficient colour contrast.
- Support keyboard navigation where applicable.
- Include meaningful labels for interactive elements.

---

## Responsiveness

The application should function correctly on:

- Desktop
- Tablet
- Mobile

---

## Maintainability

The codebase should:

- Use reusable React components.
- Follow consistent naming conventions.
- Be easy to understand and extend.

---

# 3. User Persona

## Primary Persona

### Self-Paced Learner

A learner who studies independently using online platforms.

### Goals

- Stay organized
- Track learning progress
- Build consistent study habits
- Monitor completed work

### Frustration

- Too many learning platforms
- Forgotten study sessions
- Difficulty measuring progress
- Scattered learning resources

---

# 4. User Stories

### Course Management

- As a learner, I want to add a course so that I can organize all my learning resources in one place.
- As a learner, I want to edit a course so that I can keep my information up to date.
- As a learner, I want to delete a course so that I can remove completed or unwanted courses.

---

### Progress Tracking

- As a learner, I want to record completed lessons so that I can measure my learning progress.
- As a learner, I want to view my completion percentage so that I know how much of each course remains.

---

### Study Sessions

- As a learner, I want to schedule study sessions so that I can plan my learning.
- As a learner, I want to view upcomimg study sessions so that I know what to study next.

---

### Dashboard

- As a learner, I want to see a summary of my learning activity so that I can quickly understand my overall progress.

---

# 5. Use Cases

## UC-001 Add Course

**Actor**

- Learner

**Precondition**

- The application is open.

**Main Flow**

1. Navigate to Courses.
2. Select **Add Courses**.
3. Enter course information.
4. Save the course.
5. The course appears in the course list.

**PostCondition**

- The course is stored in Local Storage.

---

## UC-002 Track Progress

**Actor**

- Learner

**Main Flow**

1. Open a course.
2. Update completed modules.
3. Save changes.
4. Progress percentage updates automatically.

---

## UC-003 Schedule Study Sessions

**Actor**

- Learner

**Main Flow**

1. Navigate to Study Sessions.
2. Select **Add Session**.
3. Enter session details.
4. Save.
5. Session appears in the schedule.

---

# 6. Acceptance Criteria

## Course Management

- Users can successfully create a course.
- Users can edit course details.
- Users can delete a course.
- Course list updates immediately.

---

## Progress Tracking

- Progress percentage is calculated correctly.
- Progress bar updates after changes.

---

## Study Sessions

- Sessions can be created.
- Sessions can be deleted.
- Upcoming sessions display correctly.

---

## Dashboard

- Statistics update automatically.
- Dashboard reflects the latest application data.

---

# 7. Information Architecture

```
Dashboard
|
|--- Courses
|    |--- View Courses
|    |--- Add Course
|    |--- Course Details
|
|--- Study Sessions
     |--- View Sessions
     |--- Add Session
```

---

# 8. User Flow

---

# 9. Requirements Traceability Matrix

| Requirement | Related Feature   |
| ----------- | ----------------- |
| FR-001      | Course Management |
| FR-002      | Progress Tracking |
| FR-003      | Study Sessions    |
| FR-004      | Dashboard         |
| FR-005      | Local Storage     |

---

# 10. Next Steps

The next phase of the project is **System Design**, where the application architecture, React structure, component hierarchy, state management, routing and data model will be designed before implementation begins.

**Previous:** [Project Foundation](./01-project-foundation.md)
**Next:** [System Design](./03-system-design.md)
