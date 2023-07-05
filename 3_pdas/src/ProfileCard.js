// step3: we need to receive the object
function ProfileCard({ title, handle, image }) {
  // every time write props. might be too long, so there is a JS rule for us
  // const title = props.title;
  // const handle = props.handle;
  // those 3,4 is same meaning as row 7
  // const {title, handle} = props;
  // now we can improve this as

  return (
    // * note: cause we are in JSX, so we write className="" instead of class=""
    <div className="card">
      <div className="card-image">
        <figure className="image is1by1">
          <img src={image} alt="pda logo" />
        </figure>
      </div>

      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{title}</p>
          <p className="subtitle is-6">{handle}</p>
        </div>
      </div>
    </div>
  );
}
export default ProfileCard;
