import express from 'express';
import getData from './getData';
import goGetData from './goGetData';
import renderApp from './App';
import { log } from 'util';

const app = express();
app.use(express.json({limit: '1mb'}));

const port = 3000;

const dataAgg = async (req, res, next) => {
    const initialState = {
        Msg: 'Data Agg Middleware says Hi.'
    }
    const Stuff = await getData();

    initialState.Stuff = Stuff;

    req.initialState = initialState;
    next();
};

const goDataAgg = async (req, res, next) => {
    const initialState = await goGetData();

    req.initialState = initialState;
    next();
};

app.get('/', dataAgg, (req, res) => {
    return res.send(renderApp(req.initialState));
});

app.get('/go', goDataAgg, (req, res) => {
    return res.send(renderApp(req.initialState));
});

app.get('/data', dataAgg, (req, res) => {
    return res.send(req.initialState);
});

app.post('/post', (req, res) => {
    return res.send(renderApp(req.body));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
