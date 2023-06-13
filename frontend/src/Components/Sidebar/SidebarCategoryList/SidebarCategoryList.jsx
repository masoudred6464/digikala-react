import React, { useState } from "react";
import "./SidebarCategoryList.css";

export default function SidebarCategoryList() {
  const [titleCategory, setTitleCategory] = useState("");
  const [show, setShow] = useState(false);
  return (
    <ul className="sidebar__category-list">
      <li
        className="sidebar__category-item"
        onClick={() => {
          setTitleCategory("digital");
          setShow(!show);
        }}
      >
        <span className="sidebar__category-title">
          کالای دیجیتال
          <svg
            className="sidebar__category-item-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            id="arrow"
          >
            <path
              fill="#134563"
              d="M37.9 46 24.1 32.3l13.8-13.7 2 2-11.8 11.7L39.9 44l-2 2"
            ></path>
          </svg>
        </span>
        {titleCategory === "digital" && show && (
          <>
            <ul className="sidebar__subcategory-list">
              <li className="sidebar__subcategory-item">
                <a
                  href="main.html?shortname=digital"
                  className="sidebar__subcategory-link"
                >
                  همه ی کالاهای دیجیتال
                </a>
              </li>
              <li className="sidebar__subcategory-item">
                <a
                  href="category.html?shortname=accessories&&id=1"
                  className="sidebar__subcategory-link"
                >
                  لوازم جانبی گوشی
                  <svg
                    className="sidebar__subcategory-item-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    id="arrow"
                  >
                    <path
                      fill="#134563"
                      d="M37.9 46 24.1 32.3l13.8-13.7 2 2-11.8 11.7L39.9 44l-2 2"
                    ></path>
                  </svg>
                </a>

                <ul className="sidebar__subsubcategory-list">
                  <li className="sidebar__subsubcategory-item">
                    <a href="#" className="sidebar__subsubcategory-link">
                      کیف و کاور گوشی
                    </a>
                  </li>
                  <li className="sidebar__subsubcategory-item">
                    <a href="#" className="sidebar__subsubcategory-link">
                      پاور بانک
                    </a>
                  </li>
                  <li className="sidebar__subsubcategory-item">
                    <a href="#" className="sidebar__subsubcategory-link">
                      پایه نگهدارنده گوشی
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar__subcategory-item">
                <a
                  href="category.html?shortname=cellphone&&id=1"
                  className="sidebar__subcategory-link"
                >
                  گوشی موبایل
                  <svg
                    className="sidebar__subcategory-item-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    id="arrow"
                  >
                    <path
                      fill="#134563"
                      d="M37.9 46 24.1 32.3l13.8-13.7 2 2-11.8 11.7L39.9 44l-2 2"
                    ></path>
                  </svg>
                </a>

                <ul className="sidebar__subsubcategory-list">
                  <li className="sidebar__subsubcategory-item">
                    <a href="#" className="sidebar__subsubcategory-link">
                      اپل
                    </a>
                  </li>
                  <li className="sidebar__subsubcategory-item">
                    <a href="#" className="sidebar__subsubcategory-link">
                      سامسونگ
                    </a>
                  </li>
                  <li className="sidebar__subsubcategory-item">
                    <a href="#" className="sidebar__subsubcategory-link">
                      شیاومی
                    </a>
                  </li>
                  <li className="sidebar__subsubcategory-item">
                    <a href="#" className="sidebar__subsubcategory-link">
                      هواوی
                    </a>
                  </li>
                  <li className="sidebar__subsubcategory-item">
                    <a href="#" className="sidebar__subsubcategory-link">
                      نوکیا
                    </a>
                  </li>
                  <li className="sidebar__subsubcategory-item">
                    <a href="#" className="sidebar__subsubcategory-link">
                      آنر
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar__subcategory-item">
                <a
                  href="category.html?shortname=virtual-reality&&id=1"
                  className="sidebar__subcategory-link"
                >
                  واقعیت مجازی
                </a>
              </li>
              <li className="sidebar__subcategory-item">
                <a
                  href="category.html?shortname=wristband&&id=1"
                  className="sidebar__subcategory-link"
                >
                  مچ بند و ساعت هوشمند
                </a>
              </li>
              <li className="sidebar__subcategory-item">
                <a
                  href="category.html?shortname=tv&&id=1"
                  className="sidebar__subcategory-link"
                >
                  تلویزیون
                  <svg
                    className="sidebar__subcategory-item-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    id="arrow"
                  >
                    <path
                      fill="#134563"
                      d="M37.9 46 24.1 32.3l13.8-13.7 2 2-11.8 11.7L39.9 44l-2 2"
                    ></path>
                  </svg>
                </a>
                <ul className="sidebar__subsubcategory-list">
                  <li className="sidebar__subsubcategory-item">
                    <a href="#" className="sidebar__subsubcategory-link">
                      جی پلاس
                    </a>
                  </li>
                  <li className="sidebar__subsubcategory-item">
                    <a href="#" className="sidebar__subsubcategory-link">
                      اکس ویژن
                    </a>
                  </li>
                  <li className="sidebar__subsubcategory-item">
                    <a href="#" className="sidebar__subsubcategory-link"></a>
                    دوو
                  </li>
                  <li className="sidebar__subsubcategory-item">
                    <a href="#" className="sidebar__subsubcategory-link"></a>
                    اسنوا
                  </li>
                </ul>
              </li>
              <li className="sidebar__subcategory-item">
                <a href="#" className="sidebar__subcategory-link">
                  هدفون، هدست، هندزفری
                </a>
              </li>
              <li className="sidebar__subcategory-item">
                <a href="#" className="sidebar__subcategory-link">
                  اسپیکر، بلوتوث و باسیم
                </a>
              </li>
              <li className="sidebar__subcategory-item">
                <a href="#" className="sidebar__subcategory-link">
                  هارد، فلش و SDD
                </a>
              </li>
              <li className="sidebar__subcategory-item">
                <a href="#" className="sidebar__subcategory-link">
                  دوربین
                  <svg
                    className="sidebar__subcategory-item-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    id="arrow"
                  >
                    <path
                      fill="#134563"
                      d="M37.9 46 24.1 32.3l13.8-13.7 2 2-11.8 11.7L39.9 44l-2 2"
                    ></path>
                  </svg>
                </a>
                <ul className="sidebar__subsubcategory-list">
                  <li className="sidebar__subsubcategory-item">
                    <a href="#" className="sidebar__subsubcategory-link">
                      دوربین عکاسی دیجیتال
                    </a>
                  </li>
                  <li className="sidebar__subsubcategory-item">
                    <a href="#" className="sidebar__subsubcategory-link">
                      دوربین ورزشی و فیلمبرداری
                    </a>
                  </li>
                  <li className="sidebar__subsubcategory-item">
                    <a href="#" className="sidebar__subsubcategory-link">
                      دوربین چاپ سریع
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar__subcategory-item">
                <a href="#" className="sidebar__subcategory-link">
                  لوازم جانبی دوربین
                  <svg
                    className="sidebar__subcategory-item-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    id="arrow"
                  >
                    <path
                      fill="#134563"
                      d="M37.9 46 24.1 32.3l13.8-13.7 2 2-11.8 11.7L39.9 44l-2 2"
                    ></path>
                  </svg>
                </a>

                <ul className="sidebar__subsubcategory-list">
                  <li className="sidebar__subsubcategory-item">
                    <a href="#" className="sidebar__subsubcategory-link">
                      لنز
                    </a>
                  </li>
                  <li className="sidebar__subsubcategory-item">
                    <a href="#" className="sidebar__subsubcategory-link">
                      کیف
                    </a>
                  </li>
                  <li className="sidebar__subsubcategory-item">
                    <a href="#" className="sidebar__subsubcategory-link">
                      کارت حافظه
                    </a>
                  </li>
                  <li className="sidebar__subsubcategory-item">
                    <a href="#" className="sidebar__subsubcategory-link">
                      کاغذ چاپ عکس
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar__subcategory-item">
                <a href="#" className="sidebar__subcategory-link">
                  دوربین دو چشمی
                </a>
              </li>
              <li className="sidebar__subcategory-item">
                <a href="#" className="sidebar__subcategory-link">
                  تلسکوپ{" "}
                </a>
              </li>
              <li className="sidebar__subcategory-item">
                <a href="#" className="sidebar__subcategory-link">
                  پلی استیشن و ایکس باکس
                </a>
              </li>
              <li className="sidebar__subcategory-item">
                <a href="#" className="sidebar__subcategory-link">
                  کامپیوتر و تجهیزات جانبی
                  <svg
                    className="sidebar__subcategory-item-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    id="arrow"
                  >
                    <path
                      fill="#134563"
                      d="M37.9 46 24.1 32.3l13.8-13.7 2 2-11.8 11.7L39.9 44l-2 2"
                    ></path>
                  </svg>
                </a>
                <ul className="sidebar__subsubcategory-list">
                  <li className="sidebar__subsubcategory-item">
                    <a href="#" className="sidebar__subsubcategory-link">
                      تجهیزات مخصوص بازی
                    </a>
                  </li>
                  <li className="sidebar__subsubcategory-item">
                    <a href="#" className="sidebar__subsubcategory-link">
                      مانیتور
                    </a>
                  </li>
                  <li className="sidebar__subsubcategory-item">
                    <a href="#" className="sidebar__subsubcategory-link">
                      کیس های اسمبل شده
                    </a>
                  </li>
                  <li className="sidebar__subsubcategory-item">
                    <a href="#" className="sidebar__subsubcategory-link">
                      قطعات داخلی کامپیوتر
                    </a>
                  </li>
                  <li className="sidebar__subsubcategory-item">
                    <a href="#" className="sidebar__subsubcategory-link">
                      موس
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar__subcategory-item">
                <a href="#" className="sidebar__subcategory-link">
                  لپتاپ{" "}
                </a>
              </li>
              <li className="sidebar__subcategory-item">
                <a href="#" className="sidebar__subcategory-link">
                  لوازم جانبی لپتاپ
                  <svg
                    className="sidebar__subcategory-item-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    id="arrow"
                  >
                    <path
                      fill="#134563"
                      d="M37.9 46 24.1 32.3l13.8-13.7 2 2-11.8 11.7L39.9 44l-2 2"
                    ></path>
                  </svg>
                </a>
                <ul className="sidebar__subsubcategory-list">
                  <li className="sidebar__subsubcategory-item">
                    <a href="#" className="sidebar__subsubcategory-link">
                      کیف، کوله، کاور
                    </a>
                  </li>
                  <li className="sidebar__subsubcategory-item">
                    <a href="#" className="sidebar__subsubcategory-link">
                      کابل صدا، AUX
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar__subcategory-item">
                <a href="#" className="sidebar__subcategory-link">
                  تبلت{" "}
                </a>
              </li>
              <li className="sidebar__subcategory-item">
                <a href="#" className="sidebar__subcategory-link">
                  شارژر تبلت و موبایل
                </a>
              </li>
              <li className="sidebar__subcategory-item">
                <a href="#" className="sidebar__subcategory-link">
                  باتری{" "}
                </a>
              </li>
              <li className="sidebar__subcategory-item">
                <a href="#" className="sidebar__subcategory-link">
                  دوربین های تحت شبکه
                </a>
              </li>
              <li className="sidebar__subcategory-item">
                <a href="#" className="sidebar__subcategory-link">
                  مودم و تجهیزات شبکه
                </a>
              </li>
            </ul>
          </>
        )}
      </li>
      <li
        className="sidebar__category-item"
        onClick={() => {
          setTitleCategory("beauty");
          setShow(!show);
        }}
      >
        <span className="sidebar__category-title">
          زیبایی و سلامت
          <svg
            className="sidebar__category-item-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            id="arrow"
          >
            <path
              fill="#134563"
              d="M37.9 46 24.1 32.3l13.8-13.7 2 2-11.8 11.7L39.9 44l-2 2"
            ></path>
          </svg>
        </span>
        {titleCategory === "beauty" && show && (
          <>
            <ul className="sidebar__subcategory-list">
              <li className="sidebar__subcategory-item">
                <a
                  href="main.html?shortname=beauty&&id=2"
                  className="sidebar__subcategory-link"
                >
                  همه ی کالاهای زیبایی و سلامت
                </a>
              </li>
              <li className="sidebar__subcategory-item">
                <a
                  href="category.html?shortname=cosmetics&&id=2"
                  className="sidebar__subcategory-link"
                >
                  لوازم آرایشی
                  <svg
                    className="sidebar__subcategory-item-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    id="arrow"
                  >
                    <path
                      fill="#134563"
                      d="M37.9 46 24.1 32.3l13.8-13.7 2 2-11.8 11.7L39.9 44l-2 2"
                    ></path>
                  </svg>
                </a>
              </li>
              <li className="sidebar__subcategory-item">
                <a
                  href="category.html?shortname=skin-care&&id=2"
                  className="sidebar__subcategory-link"
                >
                  مراقبت پوست
                  <svg
                    className="sidebar__subcategory-item-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    id="arrow"
                  >
                    <path
                      fill="#134563"
                      d="M37.9 46 24.1 32.3l13.8-13.7 2 2-11.8 11.7L39.9 44l-2 2"
                    ></path>
                  </svg>
                </a>
              </li>
              <li className="sidebar__subcategory-item">
                <a
                  href="category.html?shortname=hair-care&&id=2"
                  className="sidebar__subcategory-link"
                >
                  مراقبت و زیبایی مو
                  <svg
                    className="sidebar__subcategory-item-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    id="arrow"
                  >
                    <path
                      fill="#134563"
                      d="M37.9 46 24.1 32.3l13.8-13.7 2 2-11.8 11.7L39.9 44l-2 2"
                    ></path>
                  </svg>
                </a>
              </li>
              <li className="sidebar__subcategory-item">
                <a
                  href="category.html?shortname=sanitary&&id=2"
                  className="sidebar__subcategory-link"
                >
                  لوازم بهداشتی
                  <svg
                    className="sidebar__subcategory-item-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    id="arrow"
                  >
                    <path
                      fill="#134563"
                      d="M37.9 46 24.1 32.3l13.8-13.7 2 2-11.8 11.7L39.9 44l-2 2"
                    ></path>
                  </svg>
                </a>
              </li>
              <li className="sidebar__subcategory-item">
                <a
                  href="category.html?shortname=perfume&&id=2"
                  className="sidebar__subcategory-link"
                >
                  عطر و ادکلن
                  <svg
                    className="sidebar__subcategory-item-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    id="arrow"
                  >
                    <path
                      fill="#134563"
                      d="M37.9 46 24.1 32.3l13.8-13.7 2 2-11.8 11.7L39.9 44l-2 2"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </>
        )}
      </li>
      <li
        className="sidebar__category-item"
        onClick={() => {
          setTitleCategory("building");
          setShow(!show);
        }}
      >
        <span className="sidebar__category-title">
          ابزار،لوازم ساختمانی و صنعتی
          <svg
            className="sidebar__category-item-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            id="arrow"
          >
            <path
              fill="#134563"
              d="M37.9 46 24.1 32.3l13.8-13.7 2 2-11.8 11.7L39.9 44l-2 2"
            ></path>
          </svg>
        </span>
        {titleCategory === "building" && show && (
          <>
            <ul className="sidebar__subcategory-list">
              <li className="sidebar__subcategory-item">
                <a
                  href="main.html?shortname=building"
                  className="sidebar__subcategory-link"
                >
                  همه ی کالاهای ابزار، لوازم ساختمانی و صنعتی
                </a>
              </li>
              <li className="sidebar__subcategory-item">
                <a
                  href="category.html?shortname=electrical-tools&&id=3"
                  className="sidebar__subcategory-link"
                >
                  ابزار برقی
                  <svg
                    className="sidebar__subcategory-item-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    id="arrow"
                  >
                    <path
                      fill="#134563"
                      d="M37.9 46 24.1 32.3l13.8-13.7 2 2-11.8 11.7L39.9 44l-2 2"
                    ></path>
                  </svg>
                </a>
              </li>
              <li className="sidebar__subcategory-item">
                <a
                  href="category.html?shortname=non-electical-tools&&id=3"
                  className="sidebar__subcategory-link"
                >
                  ابزار غیر برقی
                  <svg
                    className="sidebar__subcategory-item-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    id="arrow"
                  >
                    <path
                      fill="#134563"
                      d="M37.9 46 24.1 32.3l13.8-13.7 2 2-11.8 11.7L39.9 44l-2 2"
                    ></path>
                  </svg>
                </a>
              </li>
              <li className="sidebar__subcategory-item">
                <a
                  href="category.html?shortname=electrical-appliances&&id=3"
                  className="sidebar__subcategory-link"
                >
                  لوازم الکتریکی
                  <svg
                    className="sidebar__subcategory-item-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    id="arrow"
                  >
                    <path
                      fill="#134563"
                      d="M37.9 46 24.1 32.3l13.8-13.7 2 2-11.8 11.7L39.9 44l-2 2"
                    ></path>
                  </svg>
                </a>
              </li>
              <li className="sidebar__subcategory-item">
                <a
                  href="category.html?shortname=gardening-tools&&id=3"
                  className="sidebar__subcategory-link"
                >
                  لوازم باغبانی
                  <svg
                    className="sidebar__subcategory-item-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    id="arrow"
                  >
                    <path
                      fill="#134563"
                      d="M37.9 46 24.1 32.3l13.8-13.7 2 2-11.8 11.7L39.9 44l-2 2"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </>
        )}
      </li>
      <li
        className="sidebar__category-item"
        onClick={() => {
          setTitleCategory("clothes");
          setShow(!show);
        }}
      >
        <span className="sidebar__category-title">
          مد و پوشاک
          <svg
            className="sidebar__category-item-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            id="arrow"
          >
            <path
              fill="#134563"
              d="M37.9 46 24.1 32.3l13.8-13.7 2 2-11.8 11.7L39.9 44l-2 2"
            ></path>
          </svg>
        </span>
        {titleCategory === "clothes" && show && (
          <>
            <ul className="sidebar__subcategory-list">
              <li className="sidebar__subcategory-item">
                <a
                  href="main.html?shortname=clothes"
                  className="sidebar__subcategory-link"
                >
                  همه ی کالاهای مد و پوشاک
                </a>
              </li>
              <li className="sidebar__subcategory-item">
                <a
                  href="category.html?shortname=menswear&&id=4"
                  className="sidebar__subcategory-link"
                >
                  لباس مردانه
                  <svg
                    className="sidebar__subcategory-item-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    id="arrow"
                  >
                    <path
                      fill="#134563"
                      d="M37.9 46 24.1 32.3l13.8-13.7 2 2-11.8 11.7L39.9 44l-2 2"
                    ></path>
                  </svg>
                </a>
              </li>
              <li className="sidebar__subcategory-item">
                <a
                  href="category.html?shortname=men-shoes&&id=4"
                  className="sidebar__subcategory-link"
                >
                  کفش مردانه
                  <svg
                    className="sidebar__subcategory-item-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    id="arrow"
                  >
                    <path
                      fill="#134563"
                      d="M37.9 46 24.1 32.3l13.8-13.7 2 2-11.8 11.7L39.9 44l-2 2"
                    ></path>
                  </svg>
                </a>
              </li>
              <li className="sidebar__subcategory-item">
                <a
                  href="category.html?shortname=women-dress&&id=4"
                  className="sidebar__subcategory-link"
                >
                  لباس زنانه
                  <svg
                    className="sidebar__subcategory-item-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    id="arrow"
                  >
                    <path
                      fill="#134563"
                      d="M37.9 46 24.1 32.3l13.8-13.7 2 2-11.8 11.7L39.9 44l-2 2"
                    ></path>
                  </svg>
                </a>
              </li>
              <li className="sidebar__subcategory-item">
                <a
                  href="category.html?shortname=women-shoes&&id=4"
                  className="sidebar__subcategory-link"
                >
                  کفش زنانه
                  <svg
                    className="sidebar__subcategory-item-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    id="arrow"
                  >
                    <path
                      fill="#134563"
                      d="M37.9 46 24.1 32.3l13.8-13.7 2 2-11.8 11.7L39.9 44l-2 2"
                    ></path>
                  </svg>
                </a>
              </li>
              <li className="sidebar__subcategory-item">
                <a
                  href="category.html?shortname=gold&&id=4"
                  className="sidebar__subcategory-link"
                >
                  طلا
                  <svg
                    className="sidebar__subcategory-item-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    id="arrow"
                  >
                    <path
                      fill="#134563"
                      d="M37.9 46 24.1 32.3l13.8-13.7 2 2-11.8 11.7L39.9 44l-2 2"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </>
        )}
      </li>
      <li
        className="sidebar__category-item"
        onClick={() => {
          setTitleCategory("supermarket");
          setShow(!show);
        }}
      >
        <span className="sidebar__category-title">
          کالاهای سوپر مارکتی
          <svg
            className="sidebar__category-item-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            id="arrow"
          >
            <path
              fill="#134563"
              d="M37.9 46 24.1 32.3l13.8-13.7 2 2-11.8 11.7L39.9 44l-2 2"
            ></path>
          </svg>
        </span>
        {titleCategory === "supermarket" && show && (
          <>
            <ul className="sidebar__subcategory-list">
              <li className="sidebar__subcategory-item">
                <a
                  href="main.html?shortname=supermarket"
                  className="sidebar__subcategory-link"
                >
                  همه ی کالاهای سوپر مارکتی
                </a>
              </li>
              <li className="sidebar__subcategory-item">
                <a
                  href="category.html?shortname=essential-products&&id=5"
                  className="sidebar__subcategory-link"
                >
                  کالاهای اساسی و خواروبار
                  <svg
                    className="sidebar__subcategory-item-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    id="arrow"
                  >
                    <path
                      fill="#134563"
                      d="M37.9 46 24.1 32.3l13.8-13.7 2 2-11.8 11.7L39.9 44l-2 2"
                    ></path>
                  </svg>
                </a>
              </li>
              <li className="sidebar__subcategory-item">
                <a
                  href="category.html?shortname=breakfast&&id=5"
                  className="sidebar__subcategory-link"
                >
                  صبحانه
                  <svg
                    className="sidebar__subcategory-item-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    id="arrow"
                  >
                    <path
                      fill="#134563"
                      d="M37.9 46 24.1 32.3l13.8-13.7 2 2-11.8 11.7L39.9 44l-2 2"
                    ></path>
                  </svg>
                </a>
              </li>
              <li className="sidebar__subcategory-item">
                <a
                  href="category.html?shortname=protein-material&&id=5"
                  className="sidebar__subcategory-link"
                >
                  مواد پروتینی
                  <svg
                    className="sidebar__subcategory-item-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    id="arrow"
                  >
                    <path
                      fill="#134563"
                      d="M37.9 46 24.1 32.3l13.8-13.7 2 2-11.8 11.7L39.9 44l-2 2"
                    ></path>
                  </svg>
                </a>
              </li>
              <li className="sidebar__subcategory-item">
                <a
                  href="category.html?shortname=dairy&&id=5"
                  className="sidebar__subcategory-link"
                >
                  لبنیات
                  <svg
                    className="sidebar__subcategory-item-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    id="arrow"
                  >
                    <path
                      fill="#134563"
                      d="M37.9 46 24.1 32.3l13.8-13.7 2 2-11.8 11.7L39.9 44l-2 2"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </>
        )}
      </li>
      <li
        className="sidebar__category-item"
        onClick={() => {
          setTitleCategory("baby");
          setShow(!show);
        }}
      >
        <span className="sidebar__category-title">
          اسباب بازی، کودک و نوزاد
          <svg
            className="sidebar__category-item-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            id="arrow"
          >
            <path
              fill="#134563"
              d="M37.9 46 24.1 32.3l13.8-13.7 2 2-11.8 11.7L39.9 44l-2 2"
            ></path>
          </svg>
        </span>
        {titleCategory === "baby" && show && (
          <>
            <ul className="sidebar__subcategory-list">
              <li className="sidebar__subcategory-item">
                <a
                  href="main.html?shortname=baby"
                  className="sidebar__subcategory-link"
                >
                  همه ی کالاهای اسباب بازی،کودک و نوزاد
                </a>
              </li>
              <li className="sidebar__subcategory-item">
                <a
                  href="category.html?shortname=baby-bathing&&id=6"
                  className="sidebar__subcategory-link"
                >
                  بهداشت و حمام کودک و نوزاد
                  <svg
                    className="sidebar__subcategory-item-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    id="arrow"
                  >
                    <path
                      fill="#134563"
                      d="M37.9 46 24.1 32.3l13.8-13.7 2 2-11.8 11.7L39.9 44l-2 2"
                    ></path>
                  </svg>
                </a>
              </li>
              <li className="sidebar__subcategory-item">
                <a
                  href="category.html?shortname=baby-clothes&&id=6"
                  className="sidebar__subcategory-link"
                >
                  پوشاک و کفش کودک و نوازد
                  <svg
                    className="sidebar__subcategory-item-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    id="arrow"
                  >
                    <path
                      fill="#134563"
                      d="M37.9 46 24.1 32.3l13.8-13.7 2 2-11.8 11.7L39.9 44l-2 2"
                    ></path>
                  </svg>
                </a>
              </li>
              <li className="sidebar__subcategory-item">
                <a
                  href="category.html?shortname=tablet&&id=6"
                  className="sidebar__subcategory-link"
                >
                  تبلت
                  <svg
                    className="sidebar__subcategory-item-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    id="arrow"
                  >
                    <path
                      fill="#134563"
                      d="M37.9 46 24.1 32.3l13.8-13.7 2 2-11.8 11.7L39.9 44l-2 2"
                    ></path>
                  </svg>
                </a>
              </li>
              <li className="sidebar__subcategory-item">
                <a
                  href="category.html?shortname=toy&&id=6"
                  className="sidebar__subcategory-link"
                >
                  اسباب بازی
                  <svg
                    className="sidebar__subcategory-item-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    id="arrow"
                  >
                    <path
                      fill="#134563"
                      d="M37.9 46 24.1 32.3l13.8-13.7 2 2-11.8 11.7L39.9 44l-2 2"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </>
        )}
      </li>
      <li
        className="sidebar__category-item"
        onClick={() => {
          setTitleCategory("kitchen");
          setShow(!show);
        }}
      >
        <span className="sidebar__category-title">
          خانه و آشپزخانه
          <svg
            className="sidebar__category-item-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            id="arrow"
          >
            <path
              fill="#134563"
              d="M37.9 46 24.1 32.3l13.8-13.7 2 2-11.8 11.7L39.9 44l-2 2"
            ></path>
          </svg>
        </span>
        {titleCategory === "kitchen" && show && (
          <>
            <ul className="sidebar__subcategory-list">
              <li className="sidebar__subcategory-item">
                <a
                  href="main.html?shortname=kitchen"
                  className="sidebar__subcategory-link"
                >
                  همه ی کالاهای خانه و آشپزخانه
                </a>
              </li>
              <li className="sidebar__subcategory-item">
                <a
                  href="category.html?shortname=tv&&id=7"
                  className="sidebar__subcategory-link"
                >
                  تلوزیون
                  <svg
                    className="sidebar__subcategory-item-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    id="arrow"
                  >
                    <path
                      fill="#134563"
                      d="M37.9 46 24.1 32.3l13.8-13.7 2 2-11.8 11.7L39.9 44l-2 2"
                    ></path>
                  </svg>
                </a>
              </li>
              <li className="sidebar__subcategory-item">
                <a
                  href="category.html?shortname=refrigerator&&id=7"
                  className="sidebar__subcategory-link"
                >
                  یخچال و فریزر
                  <svg
                    className="sidebar__subcategory-item-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    id="arrow"
                  >
                    <path
                      fill="#134563"
                      d="M37.9 46 24.1 32.3l13.8-13.7 2 2-11.8 11.7L39.9 44l-2 2"
                    ></path>
                  </svg>
                </a>
              </li>
              <li className="sidebar__subcategory-item">
                <a
                  href="category.html?shortname=decorative&&id=7"
                  className="sidebar__subcategory-link"
                >
                  دکوراتیو
                  <svg
                    className="sidebar__subcategory-item-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    id="arrow"
                  >
                    <path
                      fill="#134563"
                      d="M37.9 46 24.1 32.3l13.8-13.7 2 2-11.8 11.7L39.9 44l-2 2"
                    ></path>
                  </svg>
                </a>
              </li>
              <li className="sidebar__subcategory-item">
                <a
                  href="category.html?shortname=carpet&&id=7"
                  className="sidebar__subcategory-link"
                >
                  فرش
                  <svg
                    className="sidebar__subcategory-item-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    id="arrow"
                  >
                    <path
                      fill="#134563"
                      d="M37.9 46 24.1 32.3l13.8-13.7 2 2-11.8 11.7L39.9 44l-2 2"
                    ></path>
                  </svg>
                </a>
              </li>
              <li className="sidebar__subcategory-item">
                <a
                  href="category.html?shortname=home-appliances&&id=7"
                  className="sidebar__subcategory-link"
                >
                  لوازم برقی خانگی
                  <svg
                    className="sidebar__subcategory-item-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    id="arrow"
                  >
                    <path
                      fill="#134563"
                      d="M37.9 46 24.1 32.3l13.8-13.7 2 2-11.8 11.7L39.9 44l-2 2"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </>
        )}
      </li>
    </ul>
  );
}
