import React from "react";
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';





function RenderDish({ dish }) {

    if (dish != null) {
        return (
            <Card className="col-12 col-md-5 m-1">
                <Card className="card" cursor="pointer" onClick={() => this.onDishSelect(dish)}>
                    <CardImg src={dish.image} className="card-img-top" alt={dish.name} style={{ width: "100%" }} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </Card>
        );
    } else {
        return (
            <div></div>
        );
    }
}

function RenderComments({ comments }) {

    if (comments == null) {
        return <div></div>
    }

    const cmnts = comments.map(comment => {
        return (
            <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>--{comment.author}
                    , {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: '2-digit'
                    }).format(new Date(Date.parse(comment.date)))}
                </p>
            </li>
        )
    })
    return (
        <div className='col-12 col-md-5 m-1'>
            <h4> Comments </h4>
            <ul className='list-unstyled'>
                {cmnts}
            </ul>
        </div>
    )
}

const DishDetail = (props) => {

    


    if (props.dish != null) {

        return (
            <div className="container">
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.dish.comments} />
                </div>
            </div>
        )
    }
    else {
        return (
            <div></div>
        )
    }
}

export default DishDetail; 