import React from 'react';
import { connect } from 'react-redux';
import { getStuff, getMessage } from '../reducers';

function App({ stuff, msg }) {
    return (
        <div style={{padding:'15px'}}>
            <h1>{msg}</h1>
            {stuff.map((list, index) => (
                <div key={index} style={{width:'10%', float: 'left', padding: '15px'}}>
                    <h2>Stuff index: {`${index}`}</h2>
                    {list.map((item, pos) => (
                        <div key={pos}>
                            <h3>{item.title}</h3>
                            <p>{item.body}</p>
                        </div>
                    ))}
                </div>
            ))}
        </div>

    );
}

const mapStateToProps = state => ({
    msg: getMessage(state),
    stuff: getStuff(state)
});

export default connect(mapStateToProps)(App);
