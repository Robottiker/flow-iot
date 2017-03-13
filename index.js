"use strict"

const Transform = require("stream").Transform;

exports.decode = (objectMode) => {
    return new Transform({
        objectMode: objectMode || true,
        transform: (chunk, enc, done) =>  {

            // ..decode chunk
            chunk = chunk.toString();
            console.log('Flow-Iot.decode(chunk):', chunk);
            done(null, chunk);
        }
    });
};

exports.encode = (objectMode) => {
    return new Transform({
        objectMode: objectMode || true,
        transform: (chunk, enc, done) => {

            // ..encode chunk
            console.log('Flow-Iot.encode(chunk):', chunk.length);
            //done(null, Buffer.from(JSON.stringify(chunk), 'utf8'));
            done(null, chunk);
        }
    });
};
