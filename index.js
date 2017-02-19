"use strict"

const Transform = require("stream").Transform;

exports.encode = (scope, state, args, data, stream, next) => {
    const enc = new Transform({
        transform(chunk, enc, done) {
            // ..encode chunk
            console.log('Flow-Iot.encode(chunk):', chunk.toString());
            done(null, chunk);
        }
    });

    next(null, data, stream.pipe(enc));
};

exports.decode = (scope, state, args, data, stream, next) => {
    const dec = new Transform({
        transform(chunk, enc, done) {
            // ..decode chunk
            console.log('Flow-Iot.decode(chunk):', chunk.toString());
            done(null, chunk);
        }
    });

    next(null, data, stream.pipe(dec));
};
