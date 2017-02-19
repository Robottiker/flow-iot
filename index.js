"use strict"

const Transform = require("stream").Transform;

exports.decode = (scope, state, args, data, stream, next) => {

    const dec = new Transform({
        objectMode: args.objectMode || true,
        transform: (chunk, enc, done) =>  {
            // ..decode chunk
            chunk = JSON.parse(chunk.toString());
            console.log('Flow-Iot.decode(chunk):', Object.keys(chunk));
            done(null, chunk);
        }
    });

    next(null, data, stream.pipe(dec));
};

exports.encode = (scope, state, args, data, stream, next) => {

    const enc = new Transform({
        objectMode: args.objectMode || true,
        transform: (chunk, enc, done) => {
            // ..encode chunk
            chunk = JSON.stringify(chunk);
            console.log('Flow-Iot.encode(chunk):', chunk.length);
            //done(null, Buffer.from(JSON.stringify(chunk), 'utf8'));
            done(null, chunk);
        }
    });

    next(null, data, stream.pipe(enc));
};
