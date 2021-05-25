import React, { Component } from "react";
import { Row, FormGroup, FormControl, FormLabel, Button } from 'react-bootstrap';
import { isEmail, isEmpty, isLength, isContainWhiteSpace } from '../shared/Validator';

export default function Signup() {
    return (
        <div className="Login container">
        <Row className="mt-5">
            <form >
                <FormGroup controlId="email" >
                    <FormLabel>Email</FormLabel>
                    <FormControl type="text" name="email" placeholder="Enter your email" />
                {/* { errors.email &&
                    <HelpBlock>{errors.email}</HelpBlock>
                } */}
                </FormGroup>
                <FormGroup controlId="password" >
                    <FormLabel>Password</FormLabel>
                    <FormControl type="password" name="password" placeholder="Enter your password" />
                {/* { errors.password &&
                    <HelpBlock>{errors.password}</HelpBlock>
                } */}
                </FormGroup>
                <FormGroup controlId="password" >
                    <FormLabel>repit your password</FormLabel>
                    <FormControl type="password" name="password" placeholder="Enter your password" />
                {/* { errors.password &&
                    <HelpBlock>{errors.password}</HelpBlock>
                } */}
                </FormGroup>
                <Button type="submit"  className=" btn btn-primary mt-4 w-100">Sign-In</Button>
            </form>
        </Row>
    </div>
    )
}
