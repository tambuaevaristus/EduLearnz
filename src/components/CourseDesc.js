import React from 'react';

export const CourseDesc = (props) => {
    return (
        <div class="container my-5 d-flex align-Center justify-content-center">
            <div class="row">
                <div class="col-lg-6">
                    <img src='https://images.unsplash.com/photo-1629904853716-f0bc54eea481?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' alt='' className='img-fluid'></img>
                </div>
                <div class="col-lg-6 mt-5">
                    <h3 className='text-center fw-bold'>Machine Learning</h3>
                    <p className='text-justify px-3 my-4'>
                        Learn the basics of machine learning with TensorFlow's guided curriculum and resources. Build machine learning into your apps and deploy everywhere with TensorFlow by Google. Secure & compliant. Easy-to-use turn-key APIs. Join the TF community. Build your ML model.
                    </p>
                </div>
            </div>
        </div>

    );
}


