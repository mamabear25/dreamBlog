import React from "react";
import Edit from "../img/editblog.png";
import Delete from "../img/deleteblog.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu"

const Single = () => {
    return (
      <div className="single">
        <div className="content">
          <img src="https://netstorage-tuko.akamaized.net/images/0fgjhs1u50snapp0f.jpg?imwidth=900" alt="" />
          <div className="user">
              <img src="https://scontent.flos1-2.fna.fbcdn.net/v/t39.30808-6/301216831_5108555762603284_7098098001888340556_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFWLwoQhEPy2-hYLvuMaf2k2mzM2YJ8a1HabMzZgnxrUdXIkQb4f8SwHJBR62bMCE_BRtcIrCg4NiCc6fbkU9ua&_nc_ohc=WwtCPu6Ofz8AX9L-Ghz&_nc_zt=23&_nc_ht=scontent.flos1-2.fna&oh=00_AfDCoqXMnHrx4LO2c39NIvh3DvBM5jH09UMugNlW1mvddw&oe=63AC69D8" alt="" />
            <div className="info">
              <span>Jane Doe</span>
              <p>Posted 3 days ago</p>
            </div>
            <div className="edit">
              <Link  to={`/write?edit=1`}>
                <img src={Edit} alt="" />
              </Link>
              <img src={Delete} alt="" />
            </div>
          </div>
          <h1>Lorem ipsum dolor sit amet</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempus rhoncus neque, vel viverra eros rutrum et. Cras aliquam non nisi id varius. Nam tincidunt sodales mauris a molestie. Suspendisse pulvinar lectus nunc. Aliquam neque ipsum, maximus sed tincidunt in, feugiat et nibh. Vestibulum pretium dui a dui maximus mattis
            Mauris eget lorem turpis. Aenean nec lacus eu orci accumsan placerat. Morbi mollis ullamcorper hendrerit.
            Maecenas  sit amet auctor diam. Integer facilisis metus urna, vitae congue magna ullamcorper viverra. Etiam dapibus
            <p>eros in commodo euismod, nisi tortor facilisis risus, a sodales nunc libero non dolor. Nam hendrerit ex vel porta efficitur. Nulla vulputate ex vitae justo gravida, ut ornare velit faucibus. Sed vehicula enim pellentesque ultrices eleifend. Praesent quis ultrices lectus, non semper nibh. Ut ultricies, nisl et finibus vehicula,
               erat nisi condimentum ante, at sollicitudin arcu magna eget elit.
              Proin et porta lectus, in vulputate est. Suspendisse potenti. Mauris luctus, urna quis egestas maximus, augue nunc molestie purus, vel rhoncus nisl nibh vel tellus. Curabitur dignissim nisi quis dolor facilisis posuere. Aenean quis odio non mi ultricies venenatis vitae vitae nisl. Proin justo massa, eleifend ut commodo nec, convallis at eros.
              Morbi vitae ligula vitae leo volutpat lacinia vel ac dui. Aliquam cursus tortor at scelerisque semper. Duis ac massa nec nisi accumsan hendrerit ac et sapien.
            </p>
            <p>eros in commodo euismod, nisi tortor facilisis risus, a sodales nunc libero non dolor. Nam hendrerit ex vel porta efficitur. Nulla vulputate ex vitae justo gravida, ut ornare velit faucibus. Sed vehicula enim pellentesque ultrices eleifend. Praesent quis ultrices lectus, non semper nibh. Ut ultricies, nisl et finibus vehicula,
               erat nisi condimentum ante, at sollicitudin arcu magna eget elit.
              Proin et porta lectus, in vulputate est. Suspendisse potenti. Mauris luctus, urna quis egestas maximus, augue nunc molestie purus, vel rhoncus nisl nibh vel tellus. Curabitur dignissim nisi quis dolor facilisis posuere. Aenean quis odio non mi ultricies venenatis vitae vitae nisl. Proin justo massa, eleifend ut commodo nec, convallis at eros.
              Morbi vitae ligula vitae leo volutpat lacinia vel ac dui. Aliquam cursus tortor at scelerisque semper. Duis ac massa nec nisi accumsan hendrerit ac et sapien.
            </p>
            <p>eros in commodo euismod, nisi tortor facilisis risus, a sodales nunc libero non dolor. Nam hendrerit ex vel porta efficitur. Nulla vulputate ex vitae justo gravida, ut ornare velit faucibus. Sed vehicula enim pellentesque ultrices eleifend. Praesent quis ultrices lectus, non semper nibh. Ut ultricies, nisl et finibus vehicula,
               erat nisi condimentum ante, at sollicitudin arcu magna eget elit.
              Proin et porta lectus, in vulputate est. Suspendisse potenti. Mauris luctus, urna quis egestas maximus, augue nunc molestie purus, vel rhoncus nisl nibh vel tellus. Curabitur dignissim nisi quis dolor facilisis posuere. Aenean quis odio non mi ultricies venenatis vitae vitae nisl. Proin justo massa, eleifend ut commodo nec, convallis at eros.
              Morbi vitae ligula vitae leo volutpat lacinia vel ac dui. Aliquam cursus tortor at scelerisque semper. Duis ac massa nec nisi accumsan hendrerit ac et sapien.
            </p>
            <p>eros in commodo euismod, nisi tortor facilisis risus, a sodales nunc libero non dolor. Nam hendrerit ex vel porta efficitur. Nulla vulputate ex vitae justo gravida, ut ornare velit faucibus. Sed vehicula enim pellentesque ultrices eleifend. Praesent quis ultrices lectus, non semper nibh. Ut ultricies, nisl et finibus vehicula,
               erat nisi condimentum ante, at sollicitudin arcu magna eget elit.
              Proin et porta lectus, in vulputate est. Suspendisse potenti. Mauris luctus, urna quis egestas maximus, augue nunc molestie purus, vel rhoncus nisl nibh vel tellus. Curabitur dignissim nisi quis dolor facilisis posuere. Aenean quis odio non mi ultricies venenatis vitae vitae nisl. Proin justo massa, eleifend ut commodo nec, convallis at eros.
              Morbi vitae ligula vitae leo volutpat lacinia vel ac dui. Aliquam cursus tortor at scelerisque semper. Duis ac massa nec nisi accumsan hendrerit ac et sapien.
              Proin et porta lectus, in vulputate est. Suspendisse potenti. Mauris luctus, urna quis egestas maximus, augue nunc molestie purus, vel rhoncus nisl nibh vel tellus. Curabitur dignissim nisi quis dolor facilisis posuere. Aenean quis odio non mi ultricies venenatis vitae vitae nisl. Proin justo massa, eleifend ut commodo nec, convallis at eros.
              Morbi vitae ligula vitae leo volutpat lacinia vel ac dui. Aliquam cursus tortor at scelerisque semper. Duis ac massa nec nisi accumsan hendrerit ac et sapien.
              Proin et porta lectus, in vulputate est. Suspendisse potenti. Mauris luctus, urna quis egestas maximus, augue nunc molestie purus, vel rhoncus nisl nibh vel tellus. Curabitur dignissim nisi quis dolor facilisis posuere. Aenean quis odio non mi ultricies venenatis vitae vitae nisl. Proin justo massa, eleifend ut commodo nec, convallis at eros.
              Morbi vitae ligula vitae leo volutpat lacinia vel ac dui. Aliquam cursus tortor at scelerisque semper. Duis ac massa nec nisi accumsan hendrerit ac et sapien.
            </p>
          </p>
        </div>
        <Menu />
      </div>
    );
  }
  
  export default Single;