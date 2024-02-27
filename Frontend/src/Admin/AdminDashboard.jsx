import {
    DollarCircleOutlined,
    ShoppingCartOutlined,
    ShoppingOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { Card, Space, Statistic, Table, Typography } from "antd";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import React from "react";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Dashboard() {
    const orders = 150; // Example static data
    const inventory = 200; // Example static data
    const customers = 80; // Example static data
    const revenue = 5000; // Example static data

    const recentOrders = [
        { title: "Product 1", quantity: 2, discountedPrice: 20 },
        { title: "Product 2", quantity: 1, discountedPrice: 15 },
        { title: "Product 3", quantity: 3, discountedPrice: 25 },
    ]; // Example static data

    const reveneuData = {
        labels: ["User-1", "User-2", "User-3", "User-4", "User-5"],
        datasets: [{
            label: "Revenue",
            data: [100, 200, 150, 300, 250],
            backgroundColor: "rgba(255, 0, 0, 1)",
        }],
    }; // Example static data

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "bottom",
            },
            title: {
                display: true,
                text: "Order Revenue",
            },
        },
    };

    return (
        <Space size={20} direction="vertical" style={{ marginLeft: "420px" }}>
            <Typography.Title level={9}>Dashboard</Typography.Title>
            <Space direction="horizontal">
                <DashboardCard
                    icon={<ShoppingCartOutlined style={{ color: "green", backgroundColor: "rgba(0,255,0,0.25)", borderRadius: 20, fontSize: 24, padding: 8 }} />}
                    title={"Orders"}
                    value={orders}
                />
                <DashboardCard
                    icon={<ShoppingOutlined style={{ color: "blue", backgroundColor: "rgba(0,0,255,0.25)", borderRadius: 20, fontSize: 24, padding: 8 }} />}
                    title={"Inventory"}
                    value={inventory}
                />
                <DashboardCard
                    icon={<UserOutlined style={{ color: "purple", backgroundColor: "rgba(0,255,255,0.25)", borderRadius: 20, fontSize: 24, padding: 8 }} />}
                    title={"Customer"}
                    value={customers}
                />
                <DashboardCard
                    icon={<DollarCircleOutlined style={{ color: "red", backgroundColor: "rgba(255,0,0,0.25)", borderRadius: 20, fontSize: 24, padding: 8 }} />}
                    title={"Revenue"}
                    value={revenue}
                />
            </Space>
            <Space>
                <RecentOrders recentOrders={recentOrders} />
                <DashboardChart reveneuData={reveneuData} options={options} />
            </Space>
        </Space>
    );
}

function DashboardCard({ title, value, icon }) {
    return (
        <Card>
            <Space direction="horizontal">
                {icon}
                <Statistic title={title} value={value} />
            </Space>
        </Card>
    );
}

function RecentOrders({ recentOrders }) {
    return (
        <>
            <Typography.Text>Recent Orders</Typography.Text>
            <Table
                columns={[
                    { title: "Title", dataIndex: "title" },
                    { title: "Quantity", dataIndex: "quantity" },
                    { title: "Price", dataIndex: "discountedPrice" },
                ]}
                dataSource={recentOrders}
                pagination={false}
            />
        </>
    );
}

function DashboardChart({ reveneuData, options }) {
    return (
        <Card style={{ width: 500, height: 250 }}>
            <Bar options={options} data={reveneuData} />
        </Card>
    );
}

export default Dashboard;
