import React from 'react'

const Home = () => {
  return (
    <div className="">
     <div class="container">
    <div class="row">
    <div class="col-lg-3 col-sm-6"><label>Select EV:</label></div>
    <div class="col-lg-9 col-sm-6">
      <select>
      <option>Simple 1</option>
      <option>Simple 2</option>
      <option>Simple 3</option>
      <option>Simple 4</option>
      </select>
      </div>
    </div>
    <div class="row">
    <div class="col-lg-3 col-sm-6"><label>Select Vehicle:</label></div>
    <div class="col-lg-9 col-sm-6">
      <select>
      <option>Car</option>
      <option>Bike</option>
      <option>Scooter</option>
      <option>Moped</option>
      </select>
      </div>
    </div>
    <div class="row">
    <div class="col-lg-3 col-sm-6"><label>Enter price:</label></div>
    <div class="col-lg-9 col-sm-6"><input type="number"/></div>
    </div>
    <div class="row">
    <div class="col-lg-3 col-sm-6"><label>Enter Mileage</label></div>
    <div class="col-lg-9 col-sm-6"><input type="number"/></div>
    </div>
    <div class="row">
    <div class="col-lg-3 col-sm-6"><label>Daily Average Distance</label></div>
    <div class="col-lg-9 col-sm-6"><input type="number"/></div>
    </div>
    <div class="row">
    <div class="col-lg-3 col-sm-6"><label>Fuel Price:</label></div>
    <div class="col-lg-9 col-sm-6"><input type="number"/></div>
    </div>
   
    </div>
    </div>
  )
}

export default Home