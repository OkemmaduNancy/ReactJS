import React from "react";
import classes from "./AboutUs.module.css";
import { useHistory } from "react-router-dom";

const AboutUs = () => {
  const history = useHistory();

  return (
    <div>
      <h1 className={classes.AboutUs}>About Us</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce interdum
        orci at ex cursus, ut tincidunt dolor rhoncus. Nunc dolor massa, tempus
        eget erat id, vehicula consequat risus. Duis suscipit sagittis quam in
        varius. Phasellus accumsan luctus maximus. Nullam a felis dui. Ut vel
        dictum odio, eget blandit turpis. Vestibulum ultricies nisl magna,
        fermentum dignissim dui condimentum et. Aliquam placerat, mi quis
        pretium varius, sem nibh gravida nisl, et pharetra diam arcu nec massa.
        Nunc eu diam felis. Nunc sollicitudin volutpat scelerisque. Vivamus
        ultrices felis volutpat, dignissim magna blandit, vulputate neque.
        
          Praesent imperdiet, odio nec porttitor accumsan, dui augue porttitor
          ipsum, et aliquet est ante eget leo. Vivamus molestie nulla non ex
          imperdiet condimentum. Sed at finibus ipsum. Sed et imperdiet nibh.
          Pellentesque felis turpis, ultricies sed orci a, feugiat molestie
          libero. Praesent sagittis quis augue in varius. Nullam id mauris eros.
          Pellentesque nisi magna, blandit sit amet vestibulum vitae, ultrices
          sit amet augue. Nullam venenatis mauris eu velit fringilla, non
          vulputate orci varius. Interdum et malesuada fames ac ante ipsum
          primis in faucibus. Donec et gravida felis. Cras vehicula posuere
          justo, eget sollicitudin sapien tempor sit amet. Praesent porta felis
          lacus, non malesuada metus tincidunt nec. Pellentesque vulputate felis
          nec luctus accumsan. Aliquam vulputate justo nisl, at tempor urna
          blandit nec.
        </p>
        <p>
        Vestibulum sed mauris vitae ante hendrerit dictum non ac tortor.
        Praesent cursus magna nulla, sed auctor lorem lobortis at. Praesent
        facilisis tellus eu sapien placerat, non pellentesque odio finibus. Ut
        ullamcorper egestas risus, nec bibendum lorem rhoncus id. Nam rutrum
        pharetra ligula, at eleifend velit interdum vel. Maecenas metus massa,
        bibendum vitae tempus interdum, molestie ac ligula. Suspendisse potenti.
        Etiam fringilla ipsum ipsum, quis faucibus orci eleifend sed. Quisque
        euismod at eros et ornare. Mauris porttitor et magna scelerisque
        sagittis. Nullam vitae ullamcorper ligula. Nam molestie lacus justo, et
        pretium lectus feugiat a. Proin ut sollicitudin metus. Nulla quis lorem
        rhoncus, interdum nunc sit amet, mattis justo. Aenean malesuada ex mi, a
        hendrerit mauris imperdiet a. Curabitur elementum elit lacus, at auctor
        mi consectetur et. Praesent vel dui sit amet magna dictum suscipit. Ut
        quam lectus, egestas a congue elementum, egestas vel nisi. Fusce
        imperdiet in elit vitae sagittis. Donec gravida, mauris vitae tincidunt
        tincidunt, tellus ipsum sollicitudin risus, nec tincidunt dolor leo sed
        eros. Suspendisse cursus velit enim, ac commodo orci imperdiet vitae.
        Aliquam ut est malesuada magna viverra lacinia sit amet ut nulla.
        Pellentesque volutpat porttitor nunc, quis sollicitudin velit aliquet
        vitae.
      </p>
      <button onClick={() => history.push("/App")} className={classes.readMoreButton}>Read More</button>
    </div>
  );
};

export default AboutUs;
