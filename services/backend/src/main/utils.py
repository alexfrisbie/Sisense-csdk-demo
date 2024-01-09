import subprocess
import sys
import os

# Idea: Upload Sample EComerce.smodel to Sisense if schema does not match
# Build Sample Ecommerce every time this container is started to keep DateCurrent up to date
# def prepare_sample_ecommerce():
#   # Check schema of Sample Ecommerce matches desired schema
#   is_schema_good = False
  
#   # Check 
#   if not is_schema_good:
#     pass

#   # Check if EC is running
#   is_ec_running = False

#   # If EC is not running, start it
#   if not is_ec_running:
#     pass


def add_to_path(path_start, path_end):
  print_env_cmd = subprocess.run([f'find {path_start} -type d -name {path_end}'],
                                  shell=True,
                                  capture_output=True,
                                  text=True)
  path = print_env_cmd.stdout.strip()
  if 'node' in print_env_cmd.stdout:
    os.environ["PATH"] = os.getenv('PATH').strip() + f':{path}/bin'
  else:
    os.environ["PATH"] = os.getenv('PATH').strip() + f':{path}'

def generate_csdk_data_model(data_model, sisense_url, sisense_api_token):
  data_model_ts_path = '/home/ubuntu/frontend/src/types/' + data_model.replace(' ', '-').lower()
  cmd = f'npx '
  arg1 = f'sdk-cli get-data-model '
  arg2 = f'--token "{sisense_api_token}" '
  arg3 = f'--output {data_model_ts_path} '
  arg4 = f'--dataSource "{data_model}" '
  arg5 = f'--url {sisense_url}'

  add_to_path('/root/', 'v18.18.0')
  add_to_path('/root/', 'remote-cli')
  command = subprocess.run([cmd + arg1 + arg2 + arg3 + arg4  + arg5],
                        shell=True,
                        stdout=subprocess.PIPE,
                        stderr=subprocess.PIPE,
                        text=True
                        )
  print(cmd + arg1 + arg2 + arg3 + arg4  + arg5)
