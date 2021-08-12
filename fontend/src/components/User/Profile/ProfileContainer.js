


const ProfileContainer = () => {
  return (

    // <div className="row">
    //   <div className="col s12">
    //     <div className="row">
    //       <div className="input-field col s12">
    //         <label className="active" htmlFor="fullname">
    //           Họ và Tên
    //         </label>
    //       </div>
    //     </div>
    //     <div className="row">
    //       <div className="input-field col s12">
    //         <label className="active" htmlFor="headline">
    //           Mô tả ngắn gọn
    //         </label>
    //       </div>
    //     </div>
    //     <div className="row">
    //       <div className="input-field col s12">
    //         <label className="active" htmlFor="description">
    //           Giới thiệu bản thân
    //         </label>
    //       </div>
    //     </div>
    //     <div className="row">
    //       <div className="input-field col s12">
    //         <label className="active" htmlFor="email">
    //           Email
    //         </label>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="row">
      {/* <div className="col s4"></div> */}
      <div className="col s4 offset-s4" style={{ clear: "both", padding: "50px 0" }}>
        <div className="card">
          <div class="card-image waves-effect waves-block waves-light">
            <img className="activator" src="images/office.jpg" />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">Card Title
              <i className="material-icons right">more_vert</i></span>
            <p><a href="#">This is a link</a></p>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">Card Title
              <i className="material-icons right">close</i></span>
            <div>  <span>Họ tên: </span></div>
            <div><span>Email: </span></div>
            <div><span>Mô tả ngắn</span></div>
            <div><span>Giới thiệu bản thân</span></div>
          </div>
        </div>
      </div>
      {/* <div className="col s4"></div> */}

    </div>
  );
}

export default ProfileContainer;