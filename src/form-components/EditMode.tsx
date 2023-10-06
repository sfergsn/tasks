import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [name, setName] = useState<string>("");
    function updateMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }
    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    return (
        <div>
            <Form.Check
                type="switch"
                id="edit-mode-check"
                label="Edit Mode?"
                checked={editMode}
                onChange={updateMode}
            />
            <Form.Check
                type="checkbox"
                id="student-check"
                label="Student?"
                checked={isStudent}
                onChange={updateStudent}
                hidden={!editMode}
            />
            <Form.Group controlId="formName">
                <Form.Label>Name:</Form.Label>
                <Form.Control
                    value={name}
                    onChange={updateName}
                    hidden={!editMode}
                />
            </Form.Group>
            <p>
                {isStudent && name != "" ? (
                    <span>{name} is a student</span>
                ) : !isStudent && name != "" ? (
                    <span>{name} is not a student</span>
                ) : isStudent && name == "" ? (
                    <span>Your name is a student</span>
                ) : (
                    <span>Your name is not a student</span>
                )}
            </p>
        </div>
    );
}
