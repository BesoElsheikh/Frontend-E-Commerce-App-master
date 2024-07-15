import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import './Home.css'
 const Arrivals = () => {
  return (
    <section className="arrivals_section">
      <Container>
      <Row>
        <Col
          lg="12"
          className="d-flex align-items-center  justify-content-between mt-2 mb-4"
        >
          <h1>يصل قريباً</h1>
        </Col>
      </Row>
 
      <Row className="mb-5 ">
       
        <Col lg="6" md="12" sm="12" xs='12'>
          <div className="woman_content">
            <div className="info">
              <h2>مكياج العطر</h2>
              <p> أفضل كريم لتفتيح البشرة
</p>
              <p>
               كريمات البشرة الناعمة مع الرطوبة

              </p>

              <Link to='/shop'> <button className="play_btn">Shop Now</button></Link>
            </div>

            
          </div>

          <div className="items d-flex justify-content-between align-items-center gap-4">
          <div className="items_content left w-50 ">
            <div className="info">
            <h2> مكياج العناية بالبشرة
 </h2>
              <p> أفضل كريم لتفتيح البشرة
</p>
              
              <Link to='/shop'> <button className="play_btn">Shop Now</button></Link>
            </div>

            
          </div>
          <div className="items_content right w-50">
            <div className="info">
            <h2> عطر الاستحمام والجسم
  </h2>
               
              <p>
               كريمات البشرة الناعمة مع الرطوبة

              </p>
              <Link to='/shop'> <button className="play_btn">Shop Now</button></Link>
              
            </div>

            
          </div>
          </div>

        </Col>
        <Col lg="6"  md="12" sm="12" xs='12'>
          <div className="play_station">
            <div className="info">
              <h2>مكياج العناية بالأظافر</h2>
              <p>أفضل كريمات الأساس</p>
              <p>
              ليست هناك حاجة لإيقاع سهل أو حركة إيقاعية  
              </p>
              <Link to='/shop'> <button className="play_btn">Shop Now</button></Link>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="delivery mt-5">
        <Col lg="4" md='12' className="text-center mb-5">
          <div className="icons">
          <i className="ri-truck-line"></i>
          </div>
          <h2>توصيل مجاني وسريع</h2>
          <p>التوصيل مجاني لجميع الطلبات التي تزيد عن 140 جنيه
</p>
        </Col>
        <Col lg="4" md='12' className="text-center  mb-5">
          <div className="icons">
          <i className="ri-customer-service-line"></i>          </div>
          <h2>خدمة العملاء 24/7</h2>
          <p>خدمه العملاء 24 ساعه طوال أيام الأسبوع
</p>
        </Col>
        <Col lg="4" md='12' className="text-center  mb-5">
          <div className="icons">
          <i className="ri-git-repository-private-line"></i>          </div>
          <h2>ضمان استعادة الاموال</h2>
          <p>نقوم بأرجاع الأموال خلال 30 يوما
</p>
        </Col>
      </Row>
      </Container>
    
    </section>
  );
};

export default Arrivals;
