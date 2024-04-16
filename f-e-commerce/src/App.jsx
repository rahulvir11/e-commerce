import React, { Suspense, lazy, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Loader from '../Components/admin/Loader';
import UserState from './context/user/UserState';
// Admin components
const Dashboard = lazy(() => import('../Pages/admin/Dashboard'));
const Products = lazy(() => import('../Pages/admin/Products'));
const Transaction = lazy(() => import('../Pages/admin/Transaction'));
const Customers = lazy(() => import('../Pages/admin/Customers'));
const NewProduct = lazy(() => import('../Pages/admin/Management/NewProduct'));
const ProductManagement = lazy(() => import('../Pages/admin/Management/ProductManagement'));
const TransactionManagement = lazy(() => import('../Pages/admin/Management/TransactionManagement'));
const BarCharts = lazy(() => import('../Pages/admin/Charts/BarCharts'));
const PieCharts = lazy(() => import('../Pages/admin/Charts/PieCharts'));
const LineCharts = lazy(() => import('../Pages/admin/Charts/LineCharts'));
import StopWatch from '../Pages/admin/App/StopWatch';
import Coupon from '../Pages/admin/App/Coupon';
import Toss from '../Pages/admin/App/Toss';
import Logout from '../Pages/user/Logout';
import Error from '../Pages/Error';

// User components
import Home from '../Pages/user/Home';
import Login from '../Pages/user/Login';
import Register from '../Pages/user/Register';
import UserOrders from '../Pages/user/UserOrders';
import UserCard from '../Pages/user/UserCard';
import Profile from '../Pages/user/Profile';
import Shipping from '../Pages/user/Shipping';
import Protected from '../Components/users/Procted';
import Vieworder from '../Pages/user/Vieworder';

function App() {
  return (
    <>
      <UserState>
        <Router>
          <Suspense fallback={<Loader />}>
            <Routes>
              {/* User routes */}
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Home />} />
               <Route element={<Protected/>}>
                      <Route path="/logout" element={<Logout />} />
                      <Route path="/order" element={<UserOrders />} />
                      <Route path="/card" element={<UserCard />} />
                      <Route path="/profile" element={<Profile />} />
                      <Route path="/vieworder/:id" element={<Vieworder/>} />
                      <Route path="/shipping" element={<Shipping />} />
                </Route>
              
              <Route path="/error" element={<Error />} />

              {/* Admin routes */}
              <Route path="/admin/dashboard" element={<Dashboard />} />
              <Route path="/admin/product" element={<Products />} />
              <Route path="/admin/transaction" element={<Transaction />} />
              <Route path="/admin/customer" element={<Customers />} />

              {/* Charts */}
              <Route path="/admin/chart/bar" element={<BarCharts />} />
              <Route path="/admin/chart/pie" element={<PieCharts />} />
              <Route path="/admin/chart/line" element={<LineCharts />} />

              {/* Apps */}
              <Route path="/admin/app/stopwatch" element={<StopWatch />} />
              <Route path="/admin/app/toss" element={<Toss />} />
              <Route path="/admin/app/coupon" element={<Coupon />} />

              {/* Management */}
              <Route path="/admin/product/new" element={<NewProduct />} />
              <Route path="/admin/product/manage/:id" element={<ProductManagement />} />
              <Route path="/admin/transaction/:id" element={<TransactionManagement />} />
            </Routes>
          </Suspense>
        </Router>
      </UserState>
    </>
  );
}

export default App;
