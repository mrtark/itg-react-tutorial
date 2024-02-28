import React from 'react'

function About() {
    return (
        <>
            <div class="d-flex justify-content-center mt-3">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>

            <div className="mb-3 mt-4">
                <label for="" className="form-label">Form</label>
                <input className="form-control" aria-describedby="helpId"/>
            </div>

        </>
    )
}

export default About