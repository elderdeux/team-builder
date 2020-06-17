
import React from "react";

function Member(props: any) {
    return (
        <div>
            <p>Name: {props.member.name}</p>
            <p>Email: {props.member.email}</p>
            <p>Role: {props.member.role}</p>
            <button
                onClick={() => {
                    props.setMemberToEdit(props.member);
                    props.update(`Editing ${props.member.name}`);
                }}
            >
                Edit member
            </button>
        </div>
    );
}

export default Member;