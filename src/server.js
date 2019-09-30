import express from 'express';
import getData from './getData';
import renderApp from './App';
import { log } from 'util';

const app = express();
app.use(express.json({limit: '1mb'}));

const port = 3000;

const dataAgg = async (req, res, next) => {
    const initialState = {
        msg: 'Data Agg Middleware says Hi.'
    }
    const stuff = await getData();

    initialState.stuff = stuff;

    req.initialState = initialState;
    next();
};

app.get('/', dataAgg, (req, res) => {
    return res.send(renderApp(req.initialState));
});

app.get('/data', dataAgg, (req, res) => {
    return res.send(req.initialState);
});

app.post('/post', (req, res) => {
    return res.send(renderApp(req.body));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
