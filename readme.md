##create sls project

###sls create -t aws-nodejs -p hello-serverless

##Start locally

###sls invoke local -f hello (here hello is function name)

##To test locally

### sls invoke local -f hello -d '{/"key/": 24}'

### only deploy single function

### sls deploy -s dev -f add (-f flag)

## Serverless plugin

#### serveless offline plugin

### after npm install plugin we need to add it to the

### after that to run api locally use command

##serverless offline

## Logs locally

### sls logs -f add -s prod (this will pull out recent logs from prod stage for function)

### using start time sls logs -f add -s prod --startTime 5m (last 5 min)

### using start time sls logs -f add -s prod --tail (live pulled out logs)

## API GATEWAY Request body mapping
