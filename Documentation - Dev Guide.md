This documentation resembles the whole coding flow of this repository.

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

Dashboard has 2 parts:

1. __Sidebar__ :
   Here 'Clients' and 'Admins' will have different options base on their role. Sidebar of a client is much different than the sidebar of an admin. 
   
   By using conditional rendering we decide whose sidebar we are going to render. Each time when a user logs in, we check the 'Admin' collection (database) to decide whether this user is an admin or not. According to result of this query we set the value of 'isAdmin' key.


2. __Main Section__ :
   Base on which option is been clicked in the 'sidebar', the content of 'main section will change'. All the routes related to the client or admin been set here.

- **Full Dashboard Page:**

    * Sidebar 
    * Main Section:
        * Order
        * Service List Client
        * Review

  
