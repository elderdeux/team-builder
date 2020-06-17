import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
`;

function Form(props: any) {
    const [member, setMember] = useState({ name: "", email: "", role: "" });

    const handleChange = (event: any) => {
        setMember({ ...member, [event.target.name]: event.target.value });
    };

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        !props.memberToEdit
            ? props.addTeamMember(member)
            : props.editMember(props.memberToEdit, member);
        setMember({ name: "", email: "", role: "" });
        props.update("Add member to team:");
    }

    useEffect(() => {
        setMember({
            name: props.memberToEdit.name || "",
            email: props.memberToEdit.email || "",
            role: props.memberToEdit.role || "",
        });
    }, [props.memberToEdit]);

    return (
        <StyledForm onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                    type='text'
                    name='name'
                    value={member.name}
                    onChange={(event) => handleChange(event)}
                    required
                />
            </label>
            <label>
                Email:
                <input
                    type='email'
                    name='email'
                    value={member.email}
                    onChange={(event) => handleChange(event)}
                    required
                />
            </label>
            <label>
                Role:
                <input
                    type='text'
                    name='role'
                    value={member.role}
                    onChange={(event) => handleChange(event)}
                    required
                />
            </label>
            <button>Submit!</button>
        </StyledForm>
    );
}

export default Form;