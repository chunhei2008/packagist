<?php

declare(strict_types=1);
/**
 * This file is part of Hyperf.
 *
 * @link     https://www.hyperf.io
 * @document https://doc.hyperf.io
 * @contact  group@hyperf.io
 * @license  https://github.com/hyperf-cloud/hyperf/blob/master/LICENSE
 */

namespace App\Task;

use Hyperf\Crontab\Annotation\Crontab;
use Swoole\Coroutine;

/**
 * Class SatisBuildTask.
 *
 * @Crontab(name="satis-build-task", rule="*\/2 * * * *", callback="execute", memo="定时更新Composer Repository")
 */
class SatisBuildTask
{
    public function execute()
    {
        Coroutine::exec(BASE_PATH . '/vendor/bin/satis build ./satis.json ./public');
    }
}
