import React from "react";
import { useEffect } from "react";
import puppeteer from "puppeteer";

export default function index() {
  useEffect(() => {
    const fillForm = async () => {
      // Khởi tạo trình duyệt Puppeteer
      // const response = await fetch("/api/my-puppeteer-api"); //fetch dữ liệu từ api cho trước
      // const jsonData = await response.json(); //lưu result vào prop jsonData
    };

    fillForm();
  }, []);

  return (
    <div>
      <h1>Hello world</h1>
    </div>
  );
}
