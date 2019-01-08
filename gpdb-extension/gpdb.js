define({
    {
        "name" : "Connect",
        "sub-menu" : [
            {
                "name" : "Connect to Greenplum Database (manual)",
                "snippet" : ["%load_ext sql", 
                    "%sql postgres://gpadmin:pivotal@10.0.2.6:5432/gpadmin"]
            },
            {
                "name" : "Connect to Greenplum Database (via config file)",
                "snippet" : ["import json",
                    "with open('/root/gpdb-config.json') as f:\n dbconf = json.load(f)",
                    "%load_ext sql", 
                    "%sql postgresql://{dbconf['user']}:{dbconf['passw']}@{dbconf['host']}:{str(dbconf['port'])}/{dbconf['database']}"]
            }
        ]
    },
    {
        "name" : "Query (Basic)",
        "sub-menu" : [
            {
                "name" : "Get Greenplum Database Version",
                "snippet" : ["%%sql\nSELECT version()"]
            }
        ]
    }
});