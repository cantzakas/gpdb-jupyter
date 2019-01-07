from setuptools import setup, find_packages

setup(
    name="psql-magic",
    version="0.0.1",
    author='Constantinos Antzakas',
    author_email='cantzakas@pivotal.io',
    packages=find_packages(),
    install_requires=(
        'ipython',
        'jupyter',
        'pandas',
        'sqlparse',
        'traitlets'
    ),
    tests_require=['pytest>=3.0'],
    include_package_data=True
)
