import React from 'react';

function Article(props) {
  return (
    <article className="article">
      <h3 className="date">{props.date}</h3>
      <h2 className="title">{props.title}</h2>
      <img src={props.imageSrc} alt={props.title} />
      <p>
        {props.content} <a className="linkright" href={props.link}>Continues...</a>
      </p>
    </article>
  );
}

export default function App() {
  return (
    <div className="container">
      <div className="col-9">
        <Article
          date="11/12/13"
          title="On the street in Brooklyn"
          imageSrc="/fashionblogvreact/src/blog-image-1.jpg"
          content="Consequat consectetur Excepteur dolor in id non veniam eu in ut ut ea mollit dolor nostrud esse reprehenderit occaecat Excepteur nulla nulla tempor nostrud aliquip minim elit amet laboris Ut est quis ea tempor Excepteur mollit eiusmod ut in do eiusmod esse consectetur occaecat Duis ex Ut reprehenderit qui reprehenderit laborum est commodo commodo amet cupidatat officia reprehenderit enim voluptate voluptate esse velit nisi officia exercitation dolore in est commodo cillum in dolore incididunt do in proident id veniam enim nostrud nulla dolore elit adipisicing exercitation do labore."
          link=""
        />
      </div>
      <hr />
      <div className="col-9">
        <Article
          date="11/12/13"
          title="Vintage in Vogue"
          imageSrc="/fashionblogvreact/src/blog-image-2.jpg"
          content="Consectetur Excepteur dolor in id non veniam eu in ut ut ea mollit dolor nostrud esse reprehenderit occaecat Excepteur nulla nulla tempor nostrud aliquip minim elit amet laboris Ut est quis ea tempor Excepteur mollit eiusmod ut in do eiusmod esse consectetur occaecat Duis ex Ut reprehenderit qui reprehenderit laborum est commodo commodo amet cupidatat officia reprehenderit enim voluptate voluptate esse velit nisi officia exercitation dolore in est commodo cillum in dolore incididunt do in proident id veniam enim nostrud nulla dolore elit adipisicing exercitation do labore."
          link=""
        />
      </div>
    </div>
  );
}

