import React, { Component } from "react";
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';
class DishDetail extends Component {

    constructor(props) {
        super(props);
       
    }

    renderDish(dish) {
        
        if(dish != null) {
            return(
                <Card className="col-12 col-md-5 m-1">
                    <Card className="card" cursor="pointer" onClick={() => this.onDishSelect(dish)}>
                        <CardImg src={dish.image} className="card-img-top" alt={dish.name} style={{width: "100%"}} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </Card>
            );
        } else {
            return(
                <div></div>
            );
        }
    }

    renderComments(comments) {
        
        if(comments == null) {
            return <div></div>
        }

        const cmnts = comments.map(comment => {
            return(
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
        return(
            <div className='col-12 col-md-5 m-1'>
                <h4> Comments </h4>
                <ul className='list-unstyled'>
                    {cmnts}
                </ul>
            </div>
        )
    }

    render() {

        const dish = this.props.dish; // nhận data từ parent-component MenuComponent
        

        if(dish == null) {
            return <div></div>
        }

        const dishItem = this.renderDish(dish);
        const dishComment = this.renderComments(dish.comments);

        return(
            <div className="container">
                <div className="row">
                {dishItem}
                {dishComment}
                </div>
            </div>
        )
    }

}

export default DishDetail;