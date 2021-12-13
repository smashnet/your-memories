/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.createTable('media', {
        id: 'id',
        type: 'string', // image, video
        file: 'string',
        createdAt: {
            type: 'timestamp',
            notNull: true,
            default: pgm.func('current_timestamp'),
        },
    });

    pgm.createTable('thumbnails', {
        id: 'id',
        mediaId: {
            type: 'integer',
            notNull: true,
            references: '"media"',
            onDelete: 'cascade',
        },
        file: 'string',
        format: 'string',
        size: 'integer',
        processing: {type: 'boolean', default: true },  // true, if thumbnail is still being created
        createdAt: {
            type: 'timestamp',
            notNull: true,
            default: pgm.func('current_timestamp'),
        },
    });

    pgm.createTable('meta', {
        mediaId: {
            type: 'integer',
            notNull: true,
            references: '"media"',
            onDelete: 'cascade',
        },
        container: 'string', // jpg, heic, mkv, mp4, ...
        audiocodec: 'string', // mp3, aac, ...
        videocodec: 'string', // h264, hevc, av1, vp8, vp9, ...
        imagecodec: 'string', // jpg, webp, avif, heic, ...
        width: 'integer',
        height: 'integer',
        exif: 'jsonb',
        duration: 'integer'
    });

    pgm.createIndex('thumbnails', 'mediaId');
    pgm.createIndex('meta', 'mediaId');
};

exports.down = pgm => {};
