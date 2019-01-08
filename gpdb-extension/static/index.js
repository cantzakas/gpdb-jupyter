define({
    'name' : 'Greenplum Database',
    'sub-menu' : [
        {
            'name' : 'Setup Greenplum Database connection (manual) for notebook',
            'snippet'  : [
                'import getpass',
                'host=raw_iiput("Hostname (default: 'localhost'): ")',
                'if host==None:',
                ' port=localhost',
                'port=raw_input("Port Number (default: 5432): ")',
                'if port==None:',
                ' port=5432',
                'dbname=raw_input("Database Name: ")',
                'user=raw_input("Username: ")',
                'password=getpass.getpass("Password: ")',
                '%load_ext sql',
                '%sql postgres://{user}:{password}@{host}:{port}/{dbname}',
            ],
        },
        {
            'name' : 'Setup for scripts',
            'snippet'  : [
                'import matplotlib as mpl',
                'mpl.use("Agg")  # Must come after importing mpl, but before importing plt',
                'import matplotlib.pyplot as plt',
            ],
        },
        {
            'name' : 'Documentation',
            'external-link' : 'http://gpdb.docs.pivotal.io',
        },
        {
            'name' : 'Download Pivotal Greenplum',
            'external-link' : 'https://network.pivotal.io/products/pivotal-gpdb',
        },
        '---'
    ]
});
