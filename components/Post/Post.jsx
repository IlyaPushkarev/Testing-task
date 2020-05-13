import React from "react";
import styled from "styled-components";

const BoxCreate = styled.div`
    width:80%;
    margin: 0 auto;
    font-size: 20px;
    background: #f3f3f3;
`;
const Header = styled.div`
    text-align: center;
    font-size: 2rem;
    margin-bottom: 2rem;
`;
const Body = styled.div`
display: flex;
flex-direction: column;
`;
const BodyItem = styled.div`
margin-bottom: 2rem;
text-align: center;
`;
const Input = styled.input`
width: 80%;
margin: 0 auto;
 color: palevioletred;
  font-size: 20px;
  padding: 5px 20px;
  border: 2px solid palevioletred;
  border-radius: 3px;
  outline: none;
`
const Button = styled.button`
  color: palevioletred;
  font-size: 20px;
  padding: 5px 20px;
  border: 2px solid palevioletred;
  border-radius: 3px;
  outline: none;
  cursor: pointer;
`;

class  Post extends React.Component{
    state = {
        postTitle: "",
        postBody: ""
    }

    onChangePostTitle= (e)=>{
        let title = e.currentTarget.value;
        this.setState({
            postTitle: title
        })
    }

    onChangePostBody= (e)=>{
        let body = e.currentTarget.value;
        this.setState({
            postBody: body
        })
    }

    onAddPost = ()=>{
        if(this.state.postTitle==="" || this.state.postBody===""){
            alert("Insert field");
        }
        this.props.addNewPost(this.state.postTitle,this.state.postBody);

        this.state.postTitle="";
        this.state.postBody="";
    };

    render() {
        return(
            <BoxCreate>
                <Header>Create new post</Header>
                <Body>
                    <BodyItem>
                        <Input
                            type="text"
                            placeholder="Insert a title"
                            onChange={this.onChangePostTitle}
                        />
                    </BodyItem>
                    <BodyItem>
                        <Input
                            placeholder="Create a post"
                            onChange={this.onChangePostBody}
                        ></Input>
                    </BodyItem>
                    <BodyItem>
                        <Button onClick={this.onAddPost}>ADD POST</Button>
                    </BodyItem>



                </Body>
            </BoxCreate>
        )
    }
}

export default Post;