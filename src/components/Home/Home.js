import React from "react";
import firstImage from "../../images/highSierraImage.jpeg";
import "./home.css";

function Home() {
  return (
    <div className="homePage">
      <div className="homeUpper">
        <img className="homeImage" src={firstImage} />
      </div>
      <div className="homeMiddle">
        <div className="homeDescription">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet
          congue eros. Sed dapibus ligula imperdiet, sagittis ipsum cursus,
          porttitor neque. Suspendisse commodo pharetra orci, porta laoreet
          tortor convallis vel. Donec sed tincidunt nulla. Mauris luctus et
          risus vel ullamcorper. Nam iaculis ex et augue ultricies, vel
          elementum magna efficitur. Praesent non ex risus. Nullam eu massa
          eros. Phasellus vel dui condimentum, laoreet nunc sit amet, accumsan
          lacus. Phasellus ornare ultrices finibus. Sed suscipit diam sed quam
          elementum, aliquet tincidunt dolor pulvinar. Nulla lobortis ut nisi
          nec egestas. Etiam egestas nibh eu quam sagittis, elementum
          ullamcorper enim accumsan. Donec pellentesque sapien ut iaculis
          convallis. Etiam ornare egestas massa, eget facilisis dolor tincidunt
          ac. Ut tincidunt egestas nulla quis egestas. Vestibulum mattis purus
          sapien, non porttitor dui tristique vitae. Etiam feugiat scelerisque
          massa ac tincidunt. Ut volutpat odio sit amet dui rutrum, in pretium
          velit posuere. Donec sodales, erat vel commodo fermentum, ex dui
          pretium orci, vel maximus lorem nisi non elit. Quisque dapibus, diam
          non consequat volutpat, leo justo consequat dui, ac porta neque enim a
          purus. Fusce lobortis pulvinar tellus ac pulvinar. Etiam sit amet
          dictum est. Proin sed bibendum tellus. Duis at eros metus. Nunc
          placerat viverra nibh, id dictum ipsum ultrices in. Aliquam sed
          bibendum orci. Integer non ornare ante, non commodo sapien. Aenean ac
          mauris consequat, feugiat ligula eget, viverra massa. Aliquam quis ex
          eget massa dictum cursus eget quis erat. Duis pretium egestas neque,
          sit amet suscipit lectus facilisis eget. Nulla facilisi. Curabitur at
          quam fermentum, fringilla sapien vitae, viverra turpis. Vestibulum
          tortor leo, commodo et ex sed, ullamcorper faucibus justo. Mauris a
          pretium purus, tincidunt iaculis velit. Phasellus quis condimentum
          dui, id fringilla orci.
        </div>
      </div>
      <div className="homeLower"></div>
    </div>
  );
}

export default Home;
