import express from 'express';

import {sum} from '@shared/lib';

console.log(sum(4,5));

const app = express();

app.get("/", (req, res) => {
    res.send("Hello Rush!!!");
});

app.listen(3000, () => {
    console.log("sercer started!!!");
});

