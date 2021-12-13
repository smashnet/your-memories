#!/bin/sh
check=${RUN_DB_MIGRATION:-false}
echo "Checking if DB migration could be run:" $check

if ($check); then
    echo "Starting DB migration"
    npm run migrate
    return $?
fi
exit 0
