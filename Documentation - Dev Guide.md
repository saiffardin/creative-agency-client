This documentation resembles the whole coding flow of this repository.
Inside the 'components' folder there are four folders.

1.  Landing Page
2.  Login
3.  Private Route
4.  Dashboard

## 1. Landing Page:

- **Full Landing Page** : All component that make the landing page are integrated here. The components are :

  1.  NavSection

  2.  TopBanner

  3.  Companies

  4.  Services :

      - Single Service
      - Services

  5.  WorkCarousel

  6.  ClientReview:

      - Single Review
      - Client Review

  7.  Footer

---

## 2. Login:

- Login
- Third Party Sign In Manager

---

## 3. Private Route

---

## 4. Dashboard:

- ### **Full Dashboard Page:**

  Dashboard has 2 essential parts:

  1. **Sidebar** :
     Here 'Clients' and 'Admins' will have different options base on their role. Sidebar of a client is much different than the sidebar of an admin.

     By using conditional rendering we decide whose sidebar we are going to display. Each time when a user logs in, we check the 'Admin' collection (database) to decide whether this user is an admin or not. According to result of this query we set the value of 'isAdmin' key.

  2. **Main Section** :
     I named this Main Section as based on which option is clicked in the 'sidebar' menu, the content of 'main section' will change. But no folder or js file is found on this name. All the ROUTES related to both the client or admin been put in 'FullDashboardPage.js' file.
 
- ### **DashNav**

- ### **Client** :
  - Order
  - Review
  - Service List Client
- ### **Admin** :
  - Add Service
  - Make Admin
  - Service List Admin
